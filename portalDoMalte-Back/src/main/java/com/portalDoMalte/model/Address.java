package com.portalDoMalte.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
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

    private String cep;

    private String street;

    private String number;

    private String district;

    private String city;

    private String state;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


}
