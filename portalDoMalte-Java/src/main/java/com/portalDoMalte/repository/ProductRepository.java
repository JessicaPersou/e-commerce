package com.portalDoMalte.repository;
import com.portalDoMalte.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long > {
}
