package com.portalDoMalte.controller;

import com.portalDoMalte.model.Product;
import com.portalDoMalte.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

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
        Optional<Product> product = this.productRepository.findById(id);

        return product.isPresent() ?
                ResponseEntity.ok(product.get()) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Product> create(@Valid @RequestBody Product product, HttpServletResponse response){
        Product saveProduct = productRepository.save((product));

        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
                .buildAndExpand(saveProduct.getId()).toUri();
        response.setHeader("Location", uri.toASCIIString());

        return ResponseEntity.created(uri).body(saveProduct);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product product){
        return productRepository.findById(id)
                .map( save -> {

//                    save.setImage(product.getImage());
                    save.setProduct_name(product.getProduct_name());
                    save.setProduct_name(product.getProduct_name());

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
