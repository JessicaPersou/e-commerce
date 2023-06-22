package br.com.webstore.business.impl;

import br.com.webstore.business.AddressBusiness;
import br.com.webstore.dto.AddressDTO;
import br.com.webstore.enums.AddressType;
import br.com.webstore.enums.ProfileType;
import br.com.webstore.model.Address;
import br.com.webstore.model.Buyer;
import br.com.webstore.repository.AddressRepository;
import br.com.webstore.repository.BuyerRepository;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class AddressBusinessImpl implements AddressBusiness{

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private BuyerRepository buyerRepository;

    @Override
    public List<AddressDTO> findAllAddressByBuyer(long idBuyer) {
        Buyer buyer = buyerRepository.findById(idBuyer).orElseThrow(() -> new RuntimeException("Cadastro de usúario não encontrado, id = " + idBuyer + "."));
        List<AddressDTO> addressDTOList = new ArrayList<>();

            for (Address address : buyer.getAddressList()) {
                addressDTOList.add(new AddressDTO(address));
            }

        return addressDTOList;
    }

    public AddressDTO create(long idBuyer, AddressDTO addressDTO){

        Buyer buyer = buyerRepository.findById(idBuyer).orElseThrow(() ->
                new RuntimeException("Cadastro de usúario não encontrado, id = " + idBuyer + "."));

        Address address = new Address();

        try{
            if (buyer.getProfileType() != ProfileType.DISABLED){

                address.setStreet(addressDTO.getStreet());
                address.setNumber(addressDTO.getNumber());
                address.setZipcode(addressDTO.getZipcode());
                address.setDistrict(addressDTO.getDistrict());
                address.setCity(addressDTO.getCity());
                address.setState(addressDTO.getState());
                address.setCountry(addressDTO.getCountry());

                if(addressDTO.getAddressType() == null){
                    address.setAddressType(AddressType.RESIDENTIAL);
                }

                address.setBuyerId(buyer);
                addressRepository.save(address);
                addressDTO.setId(address.getId());

                return new AddressDTO(address);
            }else{
                throw new RuntimeException("Erro, perfil desabilitado.");
            }
        }catch (Exception e){
            e.printStackTrace();
            new RuntimeException("Erro ao cadastrar novo Endereço, perfil desabilitado");
            return null;
        }
    }

    public AddressDTO updateAddressBuyer(long idBuyer, long idAddress, AddressDTO addressDTO){
        Buyer buyer = buyerRepository.findById(idBuyer).orElseThrow(() -> new RuntimeException("Cadastro de usúario não encontrado, id = " + idBuyer + "."));
        Address address = addressRepository.findById(idAddress).orElseThrow(() -> new RuntimeException("Endereço de usúario não encontrado, id = " + idAddress + "."));

        if(!buyer.getAddressList().isEmpty() && buyer.getAddressList().contains(address) || buyer.getProfileType() != ProfileType.DISABLED){

            BeanUtils.copyProperties(address,addressDTO, "id");

            if(address.getAddressType() == null){
                address.setAddressType(AddressType.RESIDENTIAL);
            }
            addressRepository.save(address);

        }else {
            new RuntimeException("Cadastro de usúario não encontrado");
        }
        return new AddressDTO(address);
    }

    public void delete(long idBuyer, long idAddress){
        Buyer buyer = buyerRepository.findById(idBuyer).orElseThrow(() -> new RuntimeException("ID " + idBuyer + " NOT FOUND (COMPRADOR)"));
        Address address = addressRepository.findById(idAddress).orElseThrow(() -> new RuntimeException("ID " + idAddress + " NOT FOUND (ENDEREÇO)"));

        if(!buyer.getAddressList().isEmpty() && buyer.getAddressList().contains(address)){
            addressRepository.deleteById(idAddress);
        }
    }
}
