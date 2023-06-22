package br.com.webstore.dto;

import br.com.webstore.model.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

        private long id;

        private String name;

        private String description;

        private String image;

        private double price;

        private long category;

//        private List<SaleDTO> saleList;

        public ProductDTO(Product product) {
                this.id = product.getId();
                this.name = product.getName();
                this.description = product.getDescription();
                this.image = product.getImage();
                this.price = product.getPrice();
                this.category = product.getCategory().getId();
        }
}
