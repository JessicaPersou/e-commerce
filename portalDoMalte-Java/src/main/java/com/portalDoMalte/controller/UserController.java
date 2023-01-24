package com.portalDoMalte.controller;

import com.portalDoMalte.event.ResourceCreateEvent;
import com.portalDoMalte.model.User;
import com.portalDoMalte.repository.UserRepository;
import com.portalDoMalte.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ApplicationEventPublisher publisher;

    @GetMapping()
    public List<User> findAll(){
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable long id) {
        Optional<User> user = this.userRepository.findById(id);
        return user.isPresent() ? ResponseEntity.ok(user.get()) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<User> create(@Validated @RequestBody User user, HttpServletResponse response) {
        User userSave = userRepository.save(user);
        publisher.publishEvent(new ResourceCreateEvent(this, response, userSave.getId()));
        return ResponseEntity.status(HttpStatus.CREATED).body(userSave);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> update(@PathVariable long id, @Validated @RequestBody User user){
        User userSave = userService.update(id, user);
        return ResponseEntity.ok(userSave);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        userRepository.deleteById(id);
    }


}