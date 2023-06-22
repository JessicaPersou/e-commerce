package br.com.webstore.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDTO {

        private long id;
        private String name;
        private String description;
        private CategoryDTO parentyCategory;

}
