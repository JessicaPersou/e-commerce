package br.com.webstore.controller;


import br.com.webstore.business.ProductBusiness;
import br.com.webstore.dto.ProductDTO;
import br.com.webstore.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductBusiness productBusiness;

    @GetMapping
    public List<Product> findAllProducts(){
        return productBusiness.findAllProducts();
    }

    @GetMapping("/{id}")
    public ProductDTO findProductById(@PathVariable long id){
        return productBusiness.findById(id);
    }

    @GetMapping("/")
    public List<ProductDTO> findProductByName(@Param("name") String name){
        return productBusiness.findByName(name);
    }

    @PostMapping
    public ProductDTO createNewProduct(@RequestBody ProductDTO productDTO){
        return productBusiness.create(productDTO);
    }

    @PutMapping("/{id}")
    public ProductDTO updateProduct(@PathVariable long id, @RequestBody ProductDTO productDTO){
        return productBusiness.update(id, productDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable long id){
        productBusiness.delete(id);
    }
}
