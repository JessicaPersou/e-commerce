package com.yourbeer.controller;


import com.yourbeer.model.Address;
import com.yourbeer.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/{usuarios}/endereco")
public class AddressController {

    @Autowired
    public AddressRepository addressRepository;

    @GetMapping()
    public List<Address> findAll(){
        return addressRepository.findAll();
    }


}
