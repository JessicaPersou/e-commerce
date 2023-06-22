package br.com.webstore.business;

import br.com.webstore.model.Category;

import java.util.List;

public interface CategoryBusiness {

    List<Category> findAllCategories();
}
