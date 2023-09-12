package com.dzykov.user;

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

import static com.dzykov.user.Role.ADMIN;
import static com.dzykov.user.Role.MANAGER;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping(value = {Endpoints.userEndpoint})
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @Operation(security = { @SecurityRequirement(name = "bearer-key") },
            tags = {"2. Manager", "user-controller", "3. User"},
            description = "Gets user's information. " +
                    "Admin or Manager has to provide an id of user. User has to provide id as 0 or any number")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN', 'MANAGER')")
    @Secured(value = "USER")
    @GetMapping(value = {"/get/{id}"})
    public User getUserDetails(@PathVariable("id") Integer id) {
        SecurityContext securityContext = SecurityContextHolder.getContext();

        if (securityContext.getAuthentication().getAuthorities().contains(new SimpleGrantedAuthority("ROLE_" + MANAGER.name())) ||
                securityContext.getAuthentication().getAuthorities().contains(new SimpleGrantedAuthority("ROLE_" + ADMIN.name()))){
            if (id == 0) {return userService.getUserByEmail(securityContext.getAuthentication().getName());}
            return userService.getUserById(id);
        }
        return userService.getUserByEmail(securityContext.getAuthentication().getName());
    }

    @Operation(security = { @SecurityRequirement(name = "bearer-key") },
            tags = {"2. Manager", "user-controller", "3. User"},
            description = "Updates user's information. " +
                    "Admin or Manager has to provide an id of user. User has to provide id as 0 or any number")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN', 'MANAGER')")
    @Secured(value = "USER")
    @PutMapping(value = {"/update/{id}"}, consumes = "application/json", produces = "application/json")
    public User updateUserDetails(@PathVariable("id") Integer id, @RequestBody User user) {
        SecurityContext securityContext = SecurityContextHolder.getContext();

        if (securityContext.getAuthentication().getAuthorities().contains(new SimpleGrantedAuthority("ROLE_" + MANAGER.name())) ||
                securityContext.getAuthentication().getAuthorities().contains(new SimpleGrantedAuthority("ROLE_" + ADMIN.name()))){
            return userService.updateUserById(id, user);

        }
        return userService.updateUserById(
                userService.getUserByEmail(securityContext.getAuthentication().getName()).getId(),
                user);
    }

}
