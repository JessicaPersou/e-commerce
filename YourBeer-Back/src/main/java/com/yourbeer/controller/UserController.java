package com.yourbeer.controller;

import com.yourbeer.model.User;
import com.yourbeer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/usuarios/{id}")
    public User findById(long id) {
        return userRepository.getById(id);
    }





}
