package br.com.webstore.repository;

import br.com.webstore.dto.BuyerDTO;
import br.com.webstore.model.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BuyerRepository extends JpaRepository<Buyer, Long> {

    @Query(value = "select b from Buyer b inner join Address a on b.id = a.buyerId.id")
    List<BuyerDTO> findAllBuyersWithAddress();

    @Query("select b from Buyer b where b.profileType= :profile")
    List<BuyerDTO> findAllByProfileTrue();

    @Query("select b from Buyer b where b.firstName like %?1% or b.lastName like %?2%")
    List<BuyerDTO> findUsersByFirstNameOrLastName(@Param("firstName")String fisrtName, @Param("lastName")String lastName);

    @Query("select b from Buyer b where b.document like %?1%")
    List<BuyerDTO> findUserByDocument(@Param("document")String document);

}
