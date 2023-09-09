package com.dzykov.cart;

import com.dzykov.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import io.hypersistence.utils.hibernate.type.array.ListArrayType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.util.List;
import java.util.Objects;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "carts")
public class Carts {

    @Id
    @GeneratedValue
    public Integer id;
    @Type(ListArrayType.class)
    @Column(
            name = "items_id",
            columnDefinition = "Integer[]"
    )
    public List<Integer> itemsId;

    @JsonBackReference()
    @OneToOne
    @JoinColumn(name = "user_id")
    public User user;

    @Override public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Carts cart)) return false;
        return Objects.equals(this.id, cart.id)
                && Objects.equals(this.itemsId, cart.itemsId)
                && Objects.equals(this.user, cart.user);
    }

    @Override public int hashCode() {
        return Objects.hash(this.id, this.itemsId, this.user.getId());
    }

    @Override public String toString() {
        return "Cart {" + "id=" + this.id + ", userId=" + this.user.getId() + ", itemsId='" + this.itemsId + "'}";
    }

}
