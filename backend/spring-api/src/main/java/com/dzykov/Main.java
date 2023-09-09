package com.dzykov;

import com.dzykov.auth.AuthenticationService;
import com.dzykov.auth.RegisterRequest;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.annotation.Order;

import static com.dzykov.user.Role.*;

@SpringBootApplication
public class Main {
    public static void main(String[] args){
        SpringApplication.run(Main.class, args);
    }

    @Bean
    @Order(2)
    public CommandLineRunner createUsers(
            AuthenticationService service
    ) {
        return args -> {
            var admin = RegisterRequest.builder()
                    .firstname("AdminN")
                    .lastname("AdminL")
                    .email("admin@mail.com")
                    .password("admin_password")
                    .role(ADMIN)
                    .build();
            System.out.println("Admin token: " + service.create(admin).getAccessToken());

            var manager = RegisterRequest.builder()
                    .firstname("ManagerN")
                    .lastname("ManagerL")
                    .email("manager@mail.com")
                    .password("manager_password")
                    .role(MANAGER)
                    .build();
            System.out.println("Manager token: " + service.create(manager).getAccessToken());

            var user = RegisterRequest.builder()
                    .firstname("userN")
                    .lastname("userL")
                    .email("user@mail.com")
                    .password("user_password")
                    .role(USER)
                    .build();
            System.out.println("User token: " + service.create(user).getAccessToken());

            var user1 = RegisterRequest.builder()
                    .firstname("userN")
                    .lastname("userL")
                    .email("user1@mail.com")
                    .password("user_password")
                    .role(USER)
                    .build();
            System.out.println("User1 token: " + service.create(user1).getAccessToken());
        };
    }

}
