package com.portaldomalte.controller;

import com.portaldomalte.model.Product;
import com.portaldomalte.repository.ProductRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductController {

    private ProductRepository productRepository;


    public ProductController(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    @GetMapping
    public List<Product> findAll(){
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Product product = productRepository.findById(id).get();
        return product != null ? ResponseEntity.ok(product) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Product> registerProduct(@RequestBody Product product) throws URISyntaxException {
        Product createProduct = productRepository.save(product);
        return ResponseEntity.created(new URI("/products/" + createProduct.getId())).body(createProduct);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product){
        Product update = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Não existe produto com o id: " + id));
            update.setName(product.getName());
            update.setDescription(product.getDescription());
            update.setQuantity(product.getQuantity());
            update.setValue(product.getValue());
            productRepository.save(update);
        return ResponseEntity.ok(update);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable Long id){
        productRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
