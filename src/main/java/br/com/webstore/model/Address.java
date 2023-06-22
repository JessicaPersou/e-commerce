package br.com.webstore.model;

import br.com.webstore.enums.AddressType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String street;

    private String number;

    private String zipcode;

    private String district;

    private String city;

    private String state;

    private String country;

    private AddressType addressType;

    @ManyToOne(targetEntity = Buyer.class)
    @JoinColumn(name = "buyer_id")
    private Buyer buyerId;

}
