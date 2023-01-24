package com.portalDoMalte.service;

import com.portalDoMalte.model.Product;
import com.portalDoMalte.repository.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product update(Long id, Product product){
        Optional<Product> productSave = productRepository.findById(id);
        if (productSave == null){
            throw new EmptyResultDataAccessException(1);
        }
        BeanUtils.copyProperties(product, productSave, "id");
        productRepository.save(product);
        return product;
    }
}
