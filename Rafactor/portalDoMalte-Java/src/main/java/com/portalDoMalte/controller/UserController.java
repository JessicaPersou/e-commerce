package com.portalDoMalte.controller;

import com.portalDoMalte.model.User;
import com.portalDoMalte.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping()
    public List<User> findAll(){
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable long id) {
        return userRepository.findById(id)
                .map(save -> ResponseEntity.ok().body(save))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<User> create(@RequestBody User user) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userRepository.save(user));
    }


    @PutMapping("/{id}")
    public ResponseEntity<User> update(@PathVariable long id, @RequestBody User user){
        return userRepository.findById(id)
                .map( save -> {

                    save.setFirst_name(user.getFirst_name());
                    save.setLast_name(user.getLast_name());
                    save.setCpf(user.getCpf());
                    save.setBirthdate(user.getBirthdate());
                    save.setPhone(user.getPhone());
                    save.setEmail(user.getEmail());
                    save.setPassword(user.getPassword());

                    User update = userRepository.save(save);
                    return ResponseEntity.ok().body(update);

                }).orElse(ResponseEntity.notFound().build());

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable long id){
        return userRepository.findById(id)
                .map(save -> {
                    userRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());

    }

}