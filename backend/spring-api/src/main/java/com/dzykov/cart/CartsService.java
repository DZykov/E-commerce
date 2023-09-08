package com.dzykov.cart;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartsService {

    private final CartsRepository cartsRepository;
    public Carts getCartById(Integer id){
        if (cartsRepository.findById(id).isEmpty()) {return Carts.builder().build();}
        return cartsRepository.findById(id).get();
    }

}
