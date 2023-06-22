package br.com.webstore.business.impl;

import br.com.webstore.business.BuyerBusiness;
import br.com.webstore.dto.BuyerDTO;
import br.com.webstore.enums.ProfileType;
import br.com.webstore.model.Address;
import br.com.webstore.model.Buyer;
import br.com.webstore.repository.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class BuyerBusinessImpl implements BuyerBusiness {

    @Autowired
    private BuyerRepository buyerRepository;

    @Override
    public List<BuyerDTO> findAll() {
        List<Buyer> buyers = buyerRepository.findAll();
        List<BuyerDTO> buyerDTOs = new ArrayList<>();

        for (Buyer buyer : buyers){
            List<Address> addressList = buyer.getAddressList();
            BuyerDTO buyerDTO = new BuyerDTO(buyer, addressList);
            buyerDTOs.add(buyerDTO);
        }
        return buyerDTOs;
    }

    @Override
    public BuyerDTO findById(long id) {
        Buyer buyers = buyerRepository.findById(id).orElseThrow(() -> new RuntimeException(id + " NOT FOUND"));
        List<Address> addressList = new ArrayList<>();
        addressList = buyers.getAddressList();
        return new BuyerDTO(buyers,addressList);
    }

    public List<BuyerDTO> findAllByProfileTrue(){
        return buyerRepository.findAllByProfileTrue();
    }

    public List<BuyerDTO> findUserByDocument(String document){
        return buyerRepository.findUserByDocument(document);
    }

    public List<BuyerDTO> findUsersByFirstNameOrLastName(String firstName, String lastName){
        return buyerRepository.findUsersByFirstNameOrLastName(firstName,lastName);
    }

    @Override
    public BuyerDTO create(BuyerDTO buyerDTO){
        Buyer buyer = new Buyer();

        buyer.setFirstName(buyerDTO.getFirstName());
        buyer.setLastName(buyerDTO.getLastName());
        buyer.setDocument(buyerDTO.getDocument());
        buyer.setBirthdate(buyerDTO.getBirthdate());
        buyer.setPhone(buyerDTO.getPhone());
        buyer.setEmail(buyerDTO.getEmail());
        buyer.setPassword(buyerDTO.getPassword());
        buyer.setProfileCriatedDate(LocalDate.now());

        if(buyer.getProfileType() == null){
            buyer.setProfileType(ProfileType.USER);
        }

        buyerRepository.save(buyer);
        buyerDTO.setId(buyer.getId());

        return new BuyerDTO(buyer);
    }

    @Override
    public BuyerDTO update(long id, BuyerDTO buyerDTO) {
        Buyer buyer = buyerRepository.findById(id).orElseThrow(() -> new RuntimeException("ID " + id + " NOT FOUND"));

        buyer.setFirstName(buyerDTO.getFirstName());
        buyer.setLastName(buyerDTO.getLastName());
        buyer.setDocument(buyerDTO.getDocument());
        buyer.setBirthdate(buyerDTO.getBirthdate());
        buyer.setPhone(buyerDTO.getPhone());
        buyer.setEmail(buyerDTO.getEmail());
        buyer.setPassword(buyerDTO.getPassword());
        buyer.setProfileCriatedDate(LocalDate.now());

        if(buyer.getProfileType() == null){
            buyer.setProfileType(ProfileType.USER);
        }

        buyerRepository.save(buyer);

        return new BuyerDTO(buyer);
    }

    public void delete(long id){
        Buyer buyer =  buyerRepository.findById(id).orElseThrow(() -> new RuntimeException("ID " + id + " NOT FOUND"));
        try{
            if(buyer.getProfileType() != ProfileType.DISABLED){
               buyer.setProfileDisabledDate(LocalDate.now());
               buyer.setProfileType(ProfileType.DISABLED);
               buyerRepository.save(buyer);
            }
        }catch (Exception e){
            throw new RuntimeException("Não foi possivel Desabilitar esse usuário.");
        }
    }
}
