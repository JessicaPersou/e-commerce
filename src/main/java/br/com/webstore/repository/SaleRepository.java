package br.com.webstore.repository;

import br.com.webstore.dto.SaleDTO;
import br.com.webstore.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface SaleRepository extends JpaRepository<Sale,Long> {

    @Query(value = "select s from Sale s where s.dateCreateSale between :startDate and :endDate")
    List<Sale> findSalesBetweenDates(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

    @Query(value = "select s from Sale s")
    List<SaleDTO> findAllSales();

    @Query(value = "select s from Sale s inner join Buyer b on s.buyer.id = b.id where b.document like %?1%")
    List<Sale> findAllSaleByDocument(@Param("document") String document);
}
