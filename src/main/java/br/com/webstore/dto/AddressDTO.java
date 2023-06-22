package br.com.webstore.dto;

import br.com.webstore.enums.AddressType;
import br.com.webstore.model.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {

    private long id;
    private String street;
    private String number;
    private String zipcode;
    private String district;
    private String city;
    private String state;
    private String country;
    private AddressType addressType;

    public AddressDTO(Address address) {
        this.id = address.getId();
        this.street = address.getStreet();
        this.number = address.getNumber();
        this.zipcode = address.getZipcode();
        this.district = address.getDistrict();
        this.city = address.getCity();
        this.state = address.getState();
        this.country = address.getCountry();
        this.addressType = address.getAddressType();
    }
}

