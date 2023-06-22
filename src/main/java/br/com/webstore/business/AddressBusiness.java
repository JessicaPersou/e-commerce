package br.com.webstore.business;

import br.com.webstore.dto.AddressDTO;

import java.util.List;


public interface AddressBusiness {

    List<AddressDTO> findAllAddressByBuyer(long idBuyer);

    AddressDTO create(long idBuyer, AddressDTO addressDTO);

    AddressDTO updateAddressBuyer(long idBuyer, long idAddress, AddressDTO addressDTO);

    void delete(long idBuyer, long idAddress);
}
