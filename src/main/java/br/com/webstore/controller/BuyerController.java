package br.com.webstore.controller;

import br.com.webstore.business.AddressBusiness;
import br.com.webstore.business.BuyerBusiness;
import br.com.webstore.dto.AddressDTO;
import br.com.webstore.dto.BuyerDTO;
import br.com.webstore.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/buyers")
public class BuyerController {

    @Autowired
    private BuyerBusiness buyerBusiness;

    @Autowired
    private AddressBusiness addressBusiness;
    @Autowired
    private AddressRepository addressRepository;

    @GetMapping
    public List<BuyerDTO> findAll(){
        return buyerBusiness.findAll();
    }

    @GetMapping("/{idBuyer}")
    public BuyerDTO findById(@PathVariable long idBuyer){
        return buyerBusiness.findById(idBuyer);
    }

    @GetMapping("/admin")
    public List<BuyerDTO> findProfileUser(){
        return buyerBusiness.findAllByProfileTrue();
    }

    @GetMapping("/name")
    public List<BuyerDTO> findUsersByFirstNameAndLastName(@Param("firstName")String firstName,
                                                          @Param("lastName") String lastName){
        return buyerBusiness.findUsersByFirstNameOrLastName(firstName, lastName);
    }

    @GetMapping("/document")
    public List<BuyerDTO> findUserByDocument(@Param("document")String document){
        return buyerBusiness.findUserByDocument(document);
    }

    @PostMapping
    public BuyerDTO createNewBuyer(@RequestBody BuyerDTO buyerDTO){
        return buyerBusiness.create(buyerDTO);
    }

    @PutMapping("/{id}")
    public BuyerDTO updateBuyer(@PathVariable long id, @RequestBody BuyerDTO buyerDTO){
        return buyerBusiness.update(id, buyerDTO);
    }

    @DeleteMapping("/{idBuyer}")
    public void deleteBuyerById(@PathVariable long idBuyer){
        buyerBusiness.delete(idBuyer);
    }

    @GetMapping("/{idBuyer}/address")
    public List<AddressDTO> findAllAddressByBuyerId(@PathVariable long idBuyer){
        return addressBusiness.findAllAddressByBuyer(idBuyer);
    }

    @PostMapping("{idBuyer}/new-address")
    public AddressDTO createNewAddress(@PathVariable long idBuyer, @RequestBody AddressDTO addressDTO){
        return addressBusiness.create(idBuyer, addressDTO);
    }

    @PutMapping("/{idBuyer}/address/{idAddress}")
    public AddressDTO updateAddressBuyer(@PathVariable long idBuyer,
                                         @PathVariable long idAddress,
                                         @RequestBody AddressDTO addressDTO){
        return addressBusiness.updateAddressBuyer(idBuyer, idAddress, addressDTO);
    }

    @DeleteMapping("/{idBuyer}/address/{idAddress}")
    public void deleteAddressById(@PathVariable long idBuyer, @PathVariable long idAddress){
        addressBusiness.delete(idBuyer, idAddress);
    }
}
