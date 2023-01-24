package com.portalDoMalte.model;
import com.sun.istack.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data // Here Getter Setter and HashCode
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "address")
public class Address {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Column(name = "cep")
    private String zipCode;

    private String street;

    @NotNull
    private String number;

    private String district;

    private String city;

    private String state;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


}
