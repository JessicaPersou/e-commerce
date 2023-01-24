package com.portalDoMalte.controller;

import com.portalDoMalte.event.ResourceCreateEvent;
import com.portalDoMalte.model.Product;
import com.portalDoMalte.repository.ProductRepository;
import com.portalDoMalte.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ApplicationEventPublisher publisher;

    @GetMapping()
    public List<Product> findAll() {
        return  productRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById (@PathVariable Long id){
        Optional<Product> product = this.productRepository.findById(id);
        return product.isPresent() ? ResponseEntity.ok(product.get()) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Product> create(@RequestBody Product product, HttpServletResponse response){
        Product productSave = productRepository.save((product));
        publisher.publishEvent(new ResourceCreateEvent(this,response, productSave.getId()));
        return ResponseEntity.status(HttpStatus.CREATED).body(productSave);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product product){
        Product productSave = productService.update(id, product);
        return ResponseEntity.ok(productSave);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        productRepository.deleteById(id);
    }

}
