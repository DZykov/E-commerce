package com.dzykov.items;

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
@Table(name = "items")
@Getter
@Setter
public class Items {

    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String description;
    private String category;
    @Type(ListArrayType.class)
    @Column(
            name = "pictures",
            columnDefinition = "text[]"
    )
    private List<String> pictures;
    private double price;

    @Override public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Items item)) return false;
        return Objects.equals(this.id, item.id)
                && Objects.equals(this.name, item.name)
                && Objects.equals(this.description, item.description)
                && Objects.equals(this.price, item.price)
                && Objects.equals(this.pictures, item.pictures)
                && Objects.equals(this.category, item.category);
    }

    @Override public int hashCode() {
        return Objects.hash(this.id, this.name, this.description, this.category, this.pictures, this.price);
    }

    @Override public String toString() {
        return "Item {" + "id=" + this.id + ", name='" + this.name + '\'' + ", category='" + this.category + '\''
                + ", description='" + this.description + '\''
                + ", price='" + this.price + "'}";
    }
}

