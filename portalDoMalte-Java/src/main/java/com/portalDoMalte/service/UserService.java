package com.portalDoMalte.service;

import com.portalDoMalte.model.User;
import com.portalDoMalte.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User update(Long id, User user){
        Optional<User> userSave = userRepository.findById(id);
        if (userSave == null){
            throw new EmptyResultDataAccessException(1);
        }
        BeanUtils.copyProperties(user, userSave, "id");
        userRepository.save(user);
        return user;
    }

}
