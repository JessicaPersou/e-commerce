package br.com.webstore.dto;

import br.com.webstore.enums.ProfileType;
import br.com.webstore.model.Address;
import br.com.webstore.model.Buyer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BuyerDTO {

    private long id;
    private String firstName;
    private String lastName;
    private Date birthdate;
    private String document;
    private String phone;
    private String email;
    private String password;
    private ProfileType profileType;
    private List<AddressDTO> addressList = new ArrayList<>();

    private LocalDate profileCriatedDate;

    private LocalDate profileDisabledDate;

    public BuyerDTO(Buyer buyer) {
        this.id = buyer.getId();
        this.firstName = buyer.getFirstName();
        this.lastName = buyer.getLastName();
        this.birthdate = buyer.getBirthdate();
        this.document = buyer.getDocument();
        this.phone = buyer.getPhone();
        this.email = buyer.getEmail();
        this.password = buyer.getPassword();
        this.profileType = buyer.getProfileType();
        this.profileCriatedDate = buyer.getProfileCriatedDate();
        this.profileDisabledDate = buyer.getProfileDisabledDate();

        this.addressList = new ArrayList<>();

        addressList.forEach(item -> {
            AddressDTO addressDTO = new AddressDTO();
            addressDTO.setStreet(item.getStreet());
            addressDTO.setNumber(item.getNumber());
            addressDTO.setZipcode(item.getZipcode());
            addressDTO.setDistrict(item.getDistrict());
            addressDTO.setCity(item.getCity());
            addressDTO.setState(item.getState());
            addressDTO.setCountry(item.getCountry());
            addressDTO.setAddressType(item.getAddressType());
            addressDTO.setId(item.getId());

            this.addressList.add(addressDTO);
        });

    }

    public BuyerDTO(Buyer buyer, List<Address> addressList ) {
        this.id = buyer.getId();
        this.firstName = buyer.getFirstName();
        this.lastName = buyer.getLastName();
        this.birthdate = buyer.getBirthdate();
        this.document = buyer.getDocument();
        this.phone = buyer.getPhone();
        this.email = buyer.getEmail();
        this.password = buyer.getPassword();
        this.profileType = buyer.getProfileType();
        this.profileCriatedDate = buyer.getProfileCriatedDate();
        this.profileDisabledDate = buyer.getProfileDisabledDate();

        this.addressList = new ArrayList<>();

        addressList.forEach(item -> {
            AddressDTO addressDTO = new AddressDTO();
            addressDTO.setStreet(item.getStreet());
            addressDTO.setNumber(item.getNumber());
            addressDTO.setZipcode(item.getZipcode());
            addressDTO.setDistrict(item.getDistrict());
            addressDTO.setCity(item.getCity());
            addressDTO.setState(item.getState());
            addressDTO.setCountry(item.getCountry());
            addressDTO.setAddressType(item.getAddressType());
            addressDTO.setId(item.getId());

            this.addressList.add(addressDTO);
        });

    }

}
