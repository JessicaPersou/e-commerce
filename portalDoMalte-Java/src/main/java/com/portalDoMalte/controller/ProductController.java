package com.portalDoMalte.controller;

import com.portalDoMalte.model.Product;
import com.portalDoMalte.model.User;
import com.portalDoMalte.repository.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping()
    public List<Product> findAll() {
        return  productRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById (@PathVariable Long id){
        return productRepository.findById(id)
                .map(save -> ResponseEntity.ok().body(save))
                .orElse(ResponseEntity.notFound().build());
    }
    @PostMapping
    public ResponseEntity<Product> create(@RequestBody Product product){
        return ResponseEntity.status(HttpStatus.CREATED).body(productRepository.save(product));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product product){
        return productRepository.findById(id)
                .map( save -> {

                    save.setName(product.getName());
                    save.setAmount(product.getAmount());

                    Product update = productRepository.save(save);
                    return ResponseEntity.ok().body(update);

                }).orElse(ResponseEntity.notFound().build());

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        return productRepository.findById(id)
                .map(save -> {
                    productRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());

    }

}
