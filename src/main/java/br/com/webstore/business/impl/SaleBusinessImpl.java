package br.com.webstore.business.impl;

import br.com.webstore.business.SaleBusiness;
import br.com.webstore.dto.ProductDTO;
import br.com.webstore.dto.SaleDTO;
import br.com.webstore.enums.ProfileType;
import br.com.webstore.enums.SaleStatus;
import br.com.webstore.model.Buyer;
import br.com.webstore.model.Product;
import br.com.webstore.model.Sale;
import br.com.webstore.repository.BuyerRepository;
import br.com.webstore.repository.ProductRepository;
import br.com.webstore.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class SaleBusinessImpl implements SaleBusiness {

    @Autowired
    private SaleRepository saleRepository;
    @Autowired
    private BuyerRepository buyerRepository;
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<SaleDTO> findAllSales() {
        List<Sale> sales = saleRepository.findAll();
        List<SaleDTO> saleDTOs = new ArrayList<>();

        for (Sale sale : sales) {
            List<Product> productList = sale.getProductsList(); // Obtém a lista de produtos da venda
            SaleDTO saleDTO = new SaleDTO(sale, productList); // Cria o SaleDTO com a venda e a lista de produtos
            saleDTOs.add(saleDTO); // Adiciona o SaleDTO à lista de SaleDTOs
        }

        return saleDTOs;
    }

    @Override
    public SaleDTO findSaleById(long id) {
        Sale sale = saleRepository.findById(id).orElseThrow(() -> new RuntimeException("Não foi encontrada venda com o id: " + id));
        List<Product> productList = sale.getProductsList();
        return new SaleDTO(sale, productList);
    }

    public List<SaleDTO> findSaleByDocument(String document){
        List<Sale> sales = saleRepository.findAllSaleByDocument(document);

        List<SaleDTO> saleDTOs = new ArrayList<>();

        for (Sale sale : sales) {
            List<Product> productList = sale.getProductsList();
            SaleDTO saleDTO = new SaleDTO(sale, productList);
            saleDTOs.add(saleDTO);
        }

        return saleDTOs;
    }

    @Override
    public List<SaleDTO> findSalesBetweenDates(LocalDate startDate, LocalDate endDate) {
        List<Sale> sales = saleRepository.findSalesBetweenDates(startDate, endDate);
        List<SaleDTO> saleDTOs = new ArrayList<>();

        for (Sale sale : sales) {
            List<Product> products = sale.getProductsList(); // Acesse o atributo de produtos da venda

            // Crie um objeto SaleDTO e adicione a venda e a lista de produtos
            SaleDTO saleDTO = new SaleDTO(sale, products);

            saleDTOs.add(saleDTO); // Adicione o SaleDTO à lista de SaleDTOs
        }

        return saleDTOs;
    }



    public SaleDTO createSale(SaleDTO saleDTO) {
        Buyer buyer = buyerRepository.findById(saleDTO.getBuyerId()).orElseThrow(() -> new RuntimeException("Comprador: " + saleDTO.getBuyerId() + ", não encontrado."));

        if(buyer.getProfileType() != ProfileType.DISABLED) {

            List<Product> productList = new ArrayList<>();
            double sumTotalPrice = 0;
            for (ProductDTO productDTO : saleDTO.getProductsList()) {
                Product product = productRepository.findById(productDTO.getId()).orElseThrow(() -> new RuntimeException("Produto: " + productDTO.getName() + " não encontrado."));

                saleDTO.setQuantity(saleDTO.getQuantity() + 1);

                sumTotalPrice += product.getPrice();

                productDTO.setName(product.getName());
                productDTO.setDescription(product.getDescription());
                productDTO.setPrice(product.getPrice());
                productDTO.setCategory(product.getCategory().getId());
                productList.add(product);
            }

            if (saleDTO.getSaleStatus() == null) {
                saleDTO.setSaleStatus(SaleStatus.PENDING); //status inicial
            }

            DecimalFormat df = new DecimalFormat("#,##0.00");
            String priceFormatDecimal = df.format(sumTotalPrice);
            priceFormatDecimal = priceFormatDecimal.replaceAll("[^\\d.,]", "");

            double formattedPrice = Double.parseDouble(priceFormatDecimal.replace(",", "."));

            saleDTO.setTotalPrice(formattedPrice);

            Sale sale = new Sale();
            LocalDate date = LocalDate.now();
            saleDTO.setDateCreateSale(date);
            sale.setDateCreateSale(saleDTO.getDateCreateSale());
            sale.setQuantity(saleDTO.getQuantity());
            sale.setTotalPrice(saleDTO.getTotalPrice());
            sale.setPaymentType(saleDTO.getPaymentType());
            sale.setSaleStatus(SaleStatus.PENDING);

            sale.setProductsList(productList);

            sale.setBuyer(buyer);

            Sale savedSale = saleRepository.save(sale);

            saleDTO.setId(savedSale.getId());
            return saleDTO;
        }
        return null;
        //TODO retornar alguma exceção caso o perfil esteja desativado e mudar o status da resposta
    }

    @Override
    public SaleDTO updateItemSale(long id, SaleDTO saleDTO) {
        Buyer buyer = buyerRepository.findById(saleDTO.getBuyerId()).orElseThrow(() -> new RuntimeException("Comprador: " + saleDTO.getBuyerId() + ", não encontrado."));

        if(buyer.getProfileType() != ProfileType.DISABLED){
            Sale sale = saleRepository.findById(id).orElseThrow(() -> new RuntimeException("Venda: " + saleDTO.getId() + ", não encontrado."));

            List<Product> productList = new ArrayList<>();
            productList = sale.getProductsList();

            int currentQuantity = sale.getQuantity();
            double sumTotalPrice = sale.getTotalPrice();

            for(ProductDTO productDTO: saleDTO.getProductsList()){
                Product product = productRepository.findById(productDTO.getId()).orElseThrow(() -> new RuntimeException("Produto: " + productDTO.getName() + " não encontrado."));

                saleDTO.setQuantity(currentQuantity += 1); //pega a quantidade atual e adiciona mais produtos da vendae guarda o valor na varialvel

                sumTotalPrice += product.getPrice();
                productDTO.setName(product.getName());
                productDTO.setDescription(product.getDescription());
                productDTO.setPrice(product.getPrice());
                productDTO.setCategory(product.getCategory().getId());
                productList.add(product);
            }

            DecimalFormat df = new DecimalFormat("#,##0.00");
            String priceFormatDecimal = df.format(sumTotalPrice);
            priceFormatDecimal = priceFormatDecimal.replaceAll("[^\\d.,]", "");

            double formattedPrice = Double.parseDouble(priceFormatDecimal.replace(",", "."));

            saleDTO.setId(sale.getId()); //pega o id da compra que já existe
            saleDTO.setTotalPrice(formattedPrice);
            saleDTO.setSaleStatus(sale.getSaleStatus()); //pega o status da venda atual
            saleDTO.setDateCreateSale(sale.getDateCreateSale());//data que a venda foi realizada inicialmente
            saleDTO.setQuantity(currentQuantity); //mostra a quantidade de produtos adicionados mais os adicionados
            sale.setQuantity(saleDTO.getQuantity());
            sale.setTotalPrice(saleDTO.getTotalPrice());//mostra o valor total da venda
            sale.setPaymentType(saleDTO.getPaymentType());//tipo de pagamento usado

            sale.setProductsList(productList);

            saleRepository.save(sale);

            return saleDTO;
        }

        return null;
    }
}
