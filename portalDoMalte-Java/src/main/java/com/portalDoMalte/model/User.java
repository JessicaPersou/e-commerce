package com.portalDoMalte.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
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

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String cpf;

    @Column
    @Temporal(TemporalType.DATE)
    private Date birthdate;

    @Column
    private String phone;

    @Column
    private String email;

    @Column
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "id") //one User can have many address
    private List<Address> address = new ArrayList<>(); //a user can have a list of address, to delivery, work address or main address for exemple.


}
