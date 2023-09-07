package com.dzykov.items;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemsRepository extends JpaRepository<Items, Integer> {

    @Modifying
    @Transactional
    @Query(value = "DELETE from items d where d.id=:id",
        nativeQuery = true)
    void deleteItemById(@Param("id") Integer id);

    @Query(value = "SELECT * FROM items d WHERE to_tsvector('english', d.description) @@ to_tsquery('english', :query)",
            nativeQuery = true)
    List<Items> searchByDescription(@Param("query") String query);

    @Query(value = "SELECT * FROM items d WHERE to_tsvector('english', d.category) @@ to_tsquery('english', :query)",
            nativeQuery = true)
    List<Items> searchByCategory(@Param("query") String query);

    @Query(value = "SELECT * FROM items d WHERE to_tsvector('english', d.name) @@ to_tsquery('english', :query)",
            nativeQuery = true)
    List<Items> searchByName(@Param("query") String query);

    @Query(value = "SELECT * FROM items d WHERE ?1 % ANY(STRING_TO_ARRAY(d.name,' '))", nativeQuery = true)
    List<Items> findAllMatchingName(String partialTitle);

    @Query(value = "SELECT * FROM items d WHERE ?1 % ANY(STRING_TO_ARRAY(d.category,' '))", nativeQuery = true)
    List<Items> findAllMatchingCategory(String partialTitle);

    @Query(value = "SELECT * FROM items d WHERE ?1 % ANY(STRING_TO_ARRAY(d.description,' '))", nativeQuery = true)
    List<Items> findAllMatchingDescription(String partialTitle);
}
