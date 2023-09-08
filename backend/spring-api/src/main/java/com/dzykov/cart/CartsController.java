package com.dzykov.cart;

import com.dzykov.config.Endpoints;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = {Endpoints.cartEndpoint})
@RequiredArgsConstructor
public class CartsController {

    private final CartsService cartsService;

    @GetMapping("/get/{id}")
    public Carts getItems(@PathVariable("id") Integer id) {
        return cartsService.getCartById(id);
    }

}
