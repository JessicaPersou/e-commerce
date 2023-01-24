package com.portalDoMalte.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(name = "user")
public class User {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private String first_name;

    private String last_name;

    private String cpf;

    private String birthdate;

    private String phone;

    private String email;

    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "id") //one User can have many address
    private List<Address> address = new ArrayList<>(); //a user can have a list of address, to delivery, work address or main address for exemple.


}
