package com.dzykov.user;


import com.dzykov.config.Endpoints;
import com.fasterxml.jackson.databind.node.ObjectNode;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = {Endpoints.managementEndpoint + Endpoints.user})
@RequiredArgsConstructor
public class ManagementController {

    private final UserService userService;

    @Operation(security = { @SecurityRequirement(name = "bearer-key") }, tags = {"1. Admin", "management-controller"})
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public User deleteUser(@PathVariable("id") Integer id) {
        return userService.deleteUserById(id);
    }

    @Operation(security = { @SecurityRequirement(name = "bearer-key") }, tags = {"1. Admin", "management-controller"})
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(value = "/block/{block}/{id}")
    public User blockUser(@PathVariable("id") Integer id, @PathVariable("block") boolean block) {
        return userService.blockUserById(id, block);
    }

    @Operation(security = { @SecurityRequirement(name = "bearer-key") }, tags = {"1. Admin", "management-controller"})
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(value = "/create", consumes = "application/json", produces = "application/json")
    public User createUser(@RequestBody ObjectNode json) {
        if (json.get("user") == null || json.get("password") == null) {
            return userService.createEmptyUser();
        }
        User user = User.builder()
                .email(json.get("user").get("email").asText())
                .firstname(json.get("user").get("firstname").asText())
                .lastname(json.get("user").get("lastname").asText())
                .role(Role.valueOf(json.get("user").get("role").asText()))
                .build();
        String password = json.get("password").asText();
        return userService.createUser(user, password);
    }

}
