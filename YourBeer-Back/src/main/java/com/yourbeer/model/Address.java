package com.yourbeer.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data // Here Getter Setter and HashCode
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "user_address")
public class Address {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "address_cep", length = 10)
    private String cep;

    @Column(name = "address_street", length = 30)
    private String street;

    @Column(name = "address_number", length = 5)
    private String number;

    @Column(name = "address_district", length = 20)
    private String district;

    @Column(name = "address_city", length = 20)
    private String city;

    @Column(name = "address_state", length = 20)
    private String state;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


}
