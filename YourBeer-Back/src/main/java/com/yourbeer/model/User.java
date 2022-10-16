package com.yourbeer.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import javax.persistence.*;
import java.sql.Date;
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

    @Column(name = "user_full_name")
    private String full_name;

    @Column(name = "user_document")
    private String document;

    @Column(name = "user_birthdate")
    private Date birthdate;

    @Column(name = "user_phone")
    private String phone;

    @Column(name = "user_email", nullable = false)
    private String email;

    @Column(name = "user_password")
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "id") //one User can have many address
    private List<Address> address = new ArrayList<>(); //a user can have a list of address, to delivery, work address or main address for exemple.



}
