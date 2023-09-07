package deprecated;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("api/v1/customers")
public class Main {

    private final CustomerRepository customerRepository;

    public Main(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public static void main(String[] args){
        SpringApplication.run(Main.class, args);
    }

    @GetMapping
    public List<Customer> getCusomers() {
        return customerRepository.findAll();
    }

    record NewCustomerRequest(String name, String lastName, String adress, String postalCode){
    }

    @PostMapping
    public void addCustomer(@RequestBody NewCustomerRequest request){
        Customer customer = new Customer();
        customer.setName(request.name());
        customer.setLastName(request.lastName());
        customer.setAdress(request.adress());
        customer.setPostalCode(request.postalCode());
        customerRepository.save(customer);
    }

    @DeleteMapping("{customerId}")
    public void deleteCustomer(@PathVariable("customerId") Integer id){
        customerRepository.deleteById(id);
    }

    @PutMapping("{customerId}")
    public void updateCustomer(@PathVariable("customerId") Integer id, @RequestBody NewCustomerRequest request){
        Customer customer = customerRepository.getReferenceById(id);
        customer.setName(request.name());
        customer.setLastName(request.lastName());
        customer.setAdress(request.adress());
        customer.setPostalCode(request.postalCode());
        customerRepository.save(customer);
    }
}
