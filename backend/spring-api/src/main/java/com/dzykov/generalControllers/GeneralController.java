package com.dzykov.generalControllers;

import com.dzykov.config.Endpoints;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

// @CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping(Endpoints.generalEndpoint)
public class GeneralController {

    @GetMapping("/welcome")
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.ok("Welcome to the Ecommerce Api!");
    }

    @GetMapping("/docs")
    public ResponseEntity<String> getDocs() {
        return ResponseEntity.status(HttpStatus.FOUND)
                .location(URI.create("http://localhost:3000/swagger-ui/index.html"))
                .build();
    }

}
