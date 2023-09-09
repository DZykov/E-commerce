package com.dzykov.cart;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartsRepository extends JpaRepository<Carts, Integer> {

    @Modifying
    @Transactional
    @Query(value = "DELETE from carts d where d.user_id=:id",
            nativeQuery = true)
    void deleteCartByUserId(@Param("id") Integer id);

    @Query(value = "SELECT * from carts d where d.user_id=:id",
            nativeQuery = true)
    Optional<Carts> getCartByUserId(@Param("id") Integer id);

}
