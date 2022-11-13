package com.portalDoMalte.repository;

import com.portalDoMalte.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
