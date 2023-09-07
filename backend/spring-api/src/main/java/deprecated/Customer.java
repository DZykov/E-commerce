package deprecated;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Customer {

    @Id
    @SequenceGenerator(
            name = "customer_id_sequence",
            sequenceName = "customer_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator  = "customer_id_sequence"
    )

    private Integer id;
    private String name;
    private String lastName;
    private String adress;
    private String postalCode;

    public Customer(Integer id, String name, String lastName, String adress, String postalCode) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.adress = adress;
        this.postalCode = postalCode;
    }

    public Customer() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Customer customer = (Customer) o;
        return Objects.equals(id, customer.id) && Objects.equals(name, customer.name) && Objects.equals(lastName, customer.lastName) && Objects.equals(adress, customer.adress) && Objects.equals(postalCode, customer.postalCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, lastName, adress, postalCode);
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastName='" + lastName + '\'' +
                ", adress='" + adress + '\'' +
                ", postalCode='" + postalCode + '\'' +
                '}';
    }
}
