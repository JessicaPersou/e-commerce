package br.com.webstore.business.impl;

import br.com.webstore.business.ProductBusiness;
import br.com.webstore.dto.ProductDTO;
import br.com.webstore.model.Category;
import br.com.webstore.model.Product;
import br.com.webstore.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductBusinessImpl implements ProductBusiness {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public ProductDTO findById(long id) {
        Product product = productRepository.findById(id).orElseThrow(() ->
                new RuntimeException("ID: " + id + " NOT FOUND"));
        return new ProductDTO(product);
    }

    @Override
    public List<ProductDTO> findByName(String name) {
        return productRepository.findByName(name);
    }

    @Override
    public ProductDTO create(ProductDTO productDTO) {
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setImage(productDTO.getImage());
        product.setPrice(productDTO.getPrice());
        product.setCategory(new Category(productDTO.getCategory()));


        productRepository.save(product);
        productDTO.setId(product.getId());

        return new ProductDTO(product);
    }

    @Override
    public ProductDTO update(long id, ProductDTO productDTO) {

        Product product = productRepository.findById(id).orElseThrow(() ->
                new RuntimeException("ID: " + id + " NOT FOUND"));
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setImage(productDTO.getImage());
        product.setPrice(productDTO.getPrice());
        product.setCategory(new Category(productDTO.getCategory()));

        productRepository.save(product);

        return new ProductDTO(product);
    }

    @Override
    public void delete(long id) {
        productRepository.deleteById(id);
    }
}
