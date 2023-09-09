package com.dzykov.cart;

import com.dzykov.user.User;
import com.dzykov.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartsService {

    private final CartsRepository cartsRepository;
    private final UserRepository userRepository;

    public Carts getCartById(Integer id){
        if (cartsRepository.findById(id).isEmpty()) {return Carts.builder().build();}
        return cartsRepository.findById(id).get();
    }

    public Carts getCartByUserId(Integer id){
        if (cartsRepository.getCartByUserId(id).isEmpty()) {return Carts.builder().build();}
        return cartsRepository.getCartByUserId(id).get();
    }

    public void createCartByUser(User user) {
        List<Integer> list = new ArrayList<>();
        var cart = Carts.builder()
                .user(user)
                .itemsId(list)
                .build();
        cartsRepository.save(cart);
    }

    public void deleteCartByUserId(Integer id) {
        if (cartsRepository.getCartByUserId(id).isEmpty()) {return;}
        cartsRepository.deleteCartByUserId(id);
        Carts.builder().build();
    }

    public Carts getCartUserByEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isEmpty()) {
            return Carts.builder().build();
        }

        Integer userId = user.get().getId();
        if (getCartByUserId(userId).getUser() == null) {
            return Carts.builder().build();
        }

        return getCartByUserId(userId);
    }

    public Carts addItemToCart(Integer itemId, String email) {
        Carts cart = getCartUserByEmail(email);
        if (cart.getId() == null) {
            return Carts.builder().build();
        }
        cart.getItemsId().add(itemId);
        cartsRepository.save(cart);
        return cart;
    }

    public Carts addItemsToCart(List<Integer> items, String email) {
        Carts cart = getCartUserByEmail(email);
        if (cart.getId() == null) {
            return Carts.builder().build();
        }
        cart.setItemsId(items);
        cartsRepository.save(cart);
        return cart;
    }
}
