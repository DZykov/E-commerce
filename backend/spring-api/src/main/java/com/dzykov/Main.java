package com.dzykov;

import static com.dzykov.user.Role.ADMIN;
import static com.dzykov.user.Role.MANAGER;
import com.dzykov.auth.AuthenticationService;
import com.dzykov.auth.RegisterRequest;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Main {
    public static void main(String[] args){
        SpringApplication.run(Main.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(
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
            System.out.println("Admin token: " + service.register(admin).getAccessToken());

            var manager = RegisterRequest.builder()
                    .firstname("ManagerN")
                    .lastname("ManagerL")
                    .email("manager@mail.com")
                    .password("manager_password")
                    .role(MANAGER)
                    .build();
            System.out.println("Manager token: " + service.register(manager).getAccessToken());
        };
    }

}
