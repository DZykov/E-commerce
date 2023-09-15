package com.dzykov.cart;

import com.dzykov.config.Endpoints;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.dzykov.user.Role.ADMIN;
import static com.dzykov.user.Role.MANAGER;

// @CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping(value = {Endpoints.cartEndpoint})
@RequiredArgsConstructor
public class CartsController {

    private final CartsService cartsService;

    @Operation(security = { @SecurityRequirement(name = "bearer-key") },
            tags = {"2. Manager", "carts-controller", "3. User"},
            description = "Get user's information. " +
                    "Admin or Manager has to provide an id of user. User has to provide id as 0 or any number")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN', 'MANAGER')")
    @Secured(value = "USER")
    @GetMapping("/get/{id}")
    public Carts getCartByUserId(@PathVariable("id") Integer id) {
        SecurityContext securityContext = SecurityContextHolder.getContext();

        if (securityContext.getAuthentication().getAuthorities().contains(new SimpleGrantedAuthority("ROLE_" + MANAGER.name())) ||
                securityContext.getAuthentication().getAuthorities().contains(new SimpleGrantedAuthority("ROLE_" + ADMIN.name()))){
            if (id == 0) {cartsService.getCartUserByEmail(securityContext.getAuthentication().getName());}
            return cartsService.getCartByUserId(id);
        }
        return cartsService.getCartUserByEmail(securityContext.getAuthentication().getName());
    }

    @Operation(security = { @SecurityRequirement(name = "bearer-key") },
            tags = {"carts-controller", "3. User"},
            description = "Provide id of an item. ")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN', 'MANAGER')")
    @Secured(value = "USER")
    @PutMapping("/add/{id}")
    public Carts addItemToCart(@PathVariable("id") Integer itemId) {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        return cartsService.addItemToCart(itemId, securityContext.getAuthentication().getName());
    }

    @Operation(security = { @SecurityRequirement(name = "bearer-key") },
            tags = {"carts-controller", "3. User"},
            description = "Deletes all previous items in cart, and adds new items. Duplicates ids shouldn't be paired" +
                    " => [1, 1, 1, 2, 3] is valid. This method should be used for deleting items in cart by passing " +
                    "empty list = > [].")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN', 'MANAGER')")
    @Secured(value = "USER")
    @PutMapping(value = "/add", consumes = "application/json", produces = "application/json")
    public Carts addItemsToCart(@RequestBody List<Integer> items) {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        return cartsService.addItemsToCart(items, securityContext.getAuthentication().getName());
    }
}
