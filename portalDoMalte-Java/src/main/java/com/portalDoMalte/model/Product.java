package com.portalDoMalte.model;

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

    private String image;

    private String product_name;

    private String value;

}
