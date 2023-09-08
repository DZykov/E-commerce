package com.dzykov.user;

import com.dzykov.config.Endpoints;
import com.dzykov.items.Items;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import static com.dzykov.user.Role.ADMIN;
import static com.dzykov.user.Role.MANAGER;

@RestController
@RequestMapping(value = {Endpoints.managementEndpoint})
@RequiredArgsConstructor
public class ManagementController {

    private final UserService userService;

    @Operation(security = { @SecurityRequirement(name = "bearer-key") }, tags = {"Admin", "Manager"})
    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    @GetMapping("/delete/{id}")
    // TODO
    public User deleteUser(@PathVariable("id") Integer id) {
        SecurityContext securityContext = SecurityContextHolder.getContext();

        return null;
    }

    @Operation(security = { @SecurityRequirement(name = "bearer-key") }, tags = {"Admin", "Manager"})
    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    @PutMapping(value = "/block/{id}", consumes = "application/json", produces = "application/json")
    // TODO
    public User getUserDetails(@PathVariable("id") Integer id, @RequestBody User user) {

        return null;
    }

}
