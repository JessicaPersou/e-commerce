package com.portalDoMalte.repository;

import com.portalDoMalte.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
