package br.com.webstore.business;

import br.com.webstore.dto.BuyerDTO;
import org.springframework.data.jpa.repository.EntityGraph;

import java.util.List;

public interface BuyerBusiness {

    List<BuyerDTO> findAll();

    @EntityGraph(attributePaths = {"addressList"})
    BuyerDTO findById(long id);

    BuyerDTO create(BuyerDTO buyerDTO);

    BuyerDTO update(long id, BuyerDTO buyerDTO);

    void delete(long id);

    List<BuyerDTO> findAllByProfileTrue();

    List<BuyerDTO> findUsersByFirstNameOrLastName(String firstName, String lastName);

    List<BuyerDTO> findUserByDocument(String document);

}
