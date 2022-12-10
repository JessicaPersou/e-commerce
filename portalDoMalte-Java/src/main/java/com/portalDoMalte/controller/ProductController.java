package com.portalDoMalte.controller;

import com.portalDoMalte.model.Product;
import com.portalDoMalte.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/product")
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



}
