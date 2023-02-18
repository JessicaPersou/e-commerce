package com.portaldomalte.repository;

import com.portaldomalte.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
