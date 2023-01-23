package com.portalDoMalte.model;

import com.sun.istack.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;
import javax.persistence.*;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(name = "product")
public class Product {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

//    private String image;
//    @Column(name="product_name")
    @NotNull
    private String product_name;

    private String value;

}
