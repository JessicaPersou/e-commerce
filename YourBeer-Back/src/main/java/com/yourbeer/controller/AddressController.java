package com.yourbeer.controller;


import com.yourbeer.model.Address;
import com.yourbeer.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user/address")
public class AddressController {

    @Autowired
    public AddressRepository addressRepository;

    @GetMapping()
    public List<Address> findAll(){
        return addressRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable long id){
        return addressRepository.findById(id)
                .map(save -> ResponseEntity.ok().body(save))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Address> create(@RequestBody Address address){
        return ResponseEntity.status(HttpStatus.CREATED).body(address);
    }

}

