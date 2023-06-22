package br.com.webstore.model;

import br.com.webstore.enums.PaymentType;
import br.com.webstore.enums.SaleStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "dt_create_sale")
    private LocalDate dateCreateSale;
    private int quantity;
    @Column(name = "unit_price")
    private double unitPrice;
    @Column(name = "total_price")
    private double totalPrice;
    @Column(name = "payment_method")
    private PaymentType paymentType;
    @Column(name = "sale_status")
    private SaleStatus saleStatus;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "sale_product",
            joinColumns = { @JoinColumn(name = "sale_id") },
            inverseJoinColumns = { @JoinColumn(name = "product_id") }
    )
    private List<Product> productsList;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "buyer_id")
    private Buyer buyer;

    /**
     * Cascade: indica que qualquer alteração realizada em entidades associadas devem ser sincronizadas
     * com a entidade SALE.
    **/
}
