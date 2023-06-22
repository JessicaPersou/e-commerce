package br.com.webstore.controller;

import br.com.webstore.business.CategoryBusiness;
import br.com.webstore.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryBusiness categoryBusiness;

    @GetMapping
    public List<Category> findAllCategories(){
        return categoryBusiness.findAllCategories();
    }
}
