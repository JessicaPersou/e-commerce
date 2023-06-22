package br.com.webstore.controller;


import br.com.webstore.business.SaleBusiness;
import br.com.webstore.dto.SaleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/sales")
public class SaleController {

    @Autowired
    private SaleBusiness saleBusiness;

    @GetMapping
    public List<SaleDTO> findAllSales(){
        return saleBusiness.findAllSales();
    }

    @GetMapping("/{id}")
    public SaleDTO findSaleById(@PathVariable long id){
        return saleBusiness.findSaleById(id);
    }

    @GetMapping("/doc")
    public List<SaleDTO> findSaleByDocument(@RequestParam("document") String document){
        return saleBusiness.findSaleByDocument(document);
    }


    @GetMapping("/date")
    public List<SaleDTO> findSalesBetweenDates(@RequestParam("startDate") LocalDate startDate, @RequestParam("endDate") LocalDate endDate){
        return saleBusiness.findSalesBetweenDates(startDate, endDate);
    }

    @PostMapping
    public SaleDTO createNewSale(@RequestBody SaleDTO saleDTO){
        SaleDTO saleDTOs =  saleBusiness.createSale(saleDTO);
        return saleDTOs;
    }

    @PutMapping("/{id}")
    public SaleDTO updateSale(@PathVariable long id, @RequestBody SaleDTO saleDTO){
        SaleDTO saleDTOs =  saleBusiness.updateItemSale(id,saleDTO);
        return saleDTOs;
    }
}
