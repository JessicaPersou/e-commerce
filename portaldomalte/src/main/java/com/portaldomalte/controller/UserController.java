package com.portaldomalte.controller;

import com.portaldomalte.model.User;
import com.portaldomalte.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping()
    public List<User> findAll(){
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        User user = userRepository.findById(id).get();
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity createUser(@RequestBody User user) throws URISyntaxException {
        User userSave = userRepository.save(user);
        return ResponseEntity.created(new URI("/user/" + userSave.getId())).body(userSave);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody User user){
        User userUpdate = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Não existe usuario com o id: " + id));
            userUpdate.setFirst_name(user.getFirst_name());
            userUpdate.setLast_name(user.getLast_name());
            userUpdate.setDocument(user.getDocument());
            userUpdate.setBirthdate(user.getBirthdate());
            userUpdate.setPhone(user.getPhone());
            userUpdate.setEmail(user.getEmail());
            userUpdate.setPassword(user.getPassword());
            userRepository.save(userUpdate);
        return ResponseEntity.ok(userUpdate);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable long id){
        userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
