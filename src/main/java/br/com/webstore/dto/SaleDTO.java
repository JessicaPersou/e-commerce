package br.com.webstore.dto;

import br.com.webstore.enums.PaymentType;
import br.com.webstore.enums.SaleStatus;
import br.com.webstore.model.Product;
import br.com.webstore.model.Sale;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SaleDTO {

    private Long id;
    private LocalDate dateCreateSale;
    private int quantity;
    private double totalPrice;
    private PaymentType paymentType;
    private SaleStatus saleStatus;
    private List<ProductDTO> productsList = new ArrayList<>();
    private Long buyerId;



    public SaleDTO(Sale sale, List<Product> productsList) {
        this.id = sale.getId();
        this.dateCreateSale = sale.getDateCreateSale();
        this.quantity = sale.getQuantity();
        this.totalPrice = sale.getTotalPrice();
        this.paymentType = sale.getPaymentType();
        this.saleStatus = sale.getSaleStatus();
        this.buyerId = sale.getBuyer().getId();
        this.productsList = new ArrayList<>();

        productsList.forEach(item -> {
            ProductDTO product = new ProductDTO();
            product.setName(item.getName());
            product.setDescription(item.getDescription());
            product.setPrice(item.getPrice());
            product.setImage(item.getImage());
            product.setCategory(item.getCategory().getId());
            product.setId(item.getId());

            this.productsList.add(product);
        });
    }

    public SaleDTO(Sale sale){
        this.id = sale.getId();
        this.dateCreateSale = sale.getDateCreateSale();
        this.quantity = sale.getQuantity();
        this.totalPrice = sale.getTotalPrice();
        this.paymentType = sale.getPaymentType();
        this.saleStatus = sale.getSaleStatus();
        this.buyerId = sale.getBuyer().getId();


        productsList.forEach(item -> {
            ProductDTO product = new ProductDTO();
            product.setName(item.getName());
            product.setDescription(item.getDescription());
            product.setPrice(item.getPrice());
            product.setImage(item.getImage());
            product.setCategory(item.getCategory());
            product.setId(item.getId());

            this.productsList.add(product);
        });

    }
}
