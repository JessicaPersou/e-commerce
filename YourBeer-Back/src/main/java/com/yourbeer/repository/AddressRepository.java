package com.yourbeer.repository;

import com.yourbeer.model.AddressModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<AddressModel, Long> {
}
