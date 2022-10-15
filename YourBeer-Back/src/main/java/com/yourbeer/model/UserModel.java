package com.yourbeer.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.sql.Date;


@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(name = "tb_user")
public class UserModel {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long user_id;

    @Column(name = "user_full_name")
    private String full_name;

    @Column(name = "user_document")
    private String document;

    @Column(name = "user_birthdate")
    private Date birthdate;
    @Column(name = "user_phone")
    private String phone;

    @Column(name = "user_email")
    private String email;

    @Column(name = "user_password")
    private String password;

    @ManyToOne
    private AddressModel addressModel;

}
