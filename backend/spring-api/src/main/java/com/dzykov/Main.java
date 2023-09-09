package com.dzykov;

import com.dzykov.auth.AuthenticationService;
import com.dzykov.auth.RegisterRequest;
import com.dzykov.items.Items;
import com.dzykov.items.ItemsService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.annotation.Order;

import java.util.Arrays;

import static com.dzykov.user.Role.*;

@SpringBootApplication
public class Main {
    public static void main(String[] args){
        SpringApplication.run(Main.class, args);
    }

    @Bean
    @Order(1)
    public CommandLineRunner createItems(ItemsService service) {
        return args -> {
            Items item = Items.builder()
                    .name("Apple Ipad 4")
                    .category("Tablet")
                    .description("""
                            9th Generation with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi,\s
                            12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Silver
                            """)
                    .price(399.99)
                    .pictures(Arrays.asList(new String[]{
                            "https://m.media-amazon.com/images/I/61yqZqfc1uL._AC_SX679_.jpg",
                            "https://m.media-amazon.com/images/I/81GvIyLqeNL._AC_SX522_.jpg"
                    }))
                    .build();
            service.createItem(item);

            item = Items.builder()
                    .name("Apple MacBook Air")
                    .price(1363.99)
                    .category("Laptop")
                    .description("""
                            13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p\s
                            FaceTime HD Camera. Works with iPhone and iPad
                            """)
                    .pictures(Arrays.asList(new String[]{
                            "https://m.media-amazon.com/images/I/71nM55mRvxL._AC_SX355_.jpg",
                            "https://m.media-amazon.com/images/I/51K8mRLCTdL._AC_SY355_.jpg",
                            "https://m.media-amazon.com/images/I/617lREZN5uL._AC_SY355_.jpg"
                    }))
                    .build();
            service.createItem(item);

            item = Items.builder()
                    .name("Acer Aspire Vero")
                    .price(1499.99)
                    .category("Laptop")
                    .description("""
                            15.6" FHD IPS, Intel Core i5-1155G7, 12GB DDR4, 512GB SSD, Intel Iris Xe, Win 11, Silver
                            """)
                    .pictures(Arrays.asList(new String[]{
                            "https://m.media-amazon.com/images/I/81mM+uqfqdL._AC_SX425_.jpg",
                            "https://m.media-amazon.com/images/I/71oD1d3GMRL._AC_SX425_.jpg",
                            "https://m.media-amazon.com/images/I/81xozrFw83L._AC_SX425_.jpg"
                    }))
                    .build();
            service.createItem(item);

            item = Items.builder()
                    .name("Samsung Galaxy Tab S6")
                    .price(850.15)
                    .category("Tablet")
                    .description("""
                            Blue 10.4" 64GB WiFi Android Tablet w/S Pen, slim metal design, dual speakers,\s
                            8MP+5MP (CAD Version and Warranty)
                            """)
                    .pictures(Arrays.asList(new String[]{
                            "https://m.media-amazon.com/images/I/61EobGaoeaL._AC_SX679_.jpg",
                            "https://m.media-amazon.com/images/I/71NYxmzH3QL._AC_SX679_.jpg",
                            "https://m.media-amazon.com/images/I/71qK7KLjITL._AC_SX679_.jpg"
                    }))
                    .build();
            service.createItem(item);

            item = Items.builder()
                    .name("Samsung Galaxy S23")
                    .price(1097.99)
                    .category("Smartphone")
                    .description("""
                            5G Black 128GB - 6.1" 120 Hz AMOLED Adaptive Display, 50MPCamera, 8K Video, Photography\s
                            (Unlocked, CAD Version & Warranty)
                            """)
                    .pictures(Arrays.asList(new String[]{
                            "https://m.media-amazon.com/images/I/61qrD6KgyWL._AC_SX679_.jpg",
                            "https://m.media-amazon.com/images/I/61RtpRfhJYL._AC_SX679_.jpg"
                    }))
                    .build();
            service.createItem(item);

            item = Items.builder()
                    .name("Apple Iphone 14")
                    .price(1037.32)
                    .category("Smartphone")
                    .description("""
                            128GB, Midnight - Unlocked (Renewed), 5G Black
                            """)
                    .pictures(Arrays.asList(new String[]{
                            "https://m.media-amazon.com/images/I/618h-H-R+ZL._AC_SX342_.jpg",
                            "https://www.digitaltrends.com/wp-content/uploads/2022/09/iPhone-14-Pro-Back-Purple-Hand.jpg"
                    }))
                    .build();
            service.createItem(item);

            item = Items.builder()
                    .name("JBL Tune 660 NC")
                    .price(45.00)
                    .category("Headphones")
                    .description("""
                            Wireless On-ear Headphones with Active Noise Cancellation - Black\s
                            """)
                    .pictures(Arrays.asList(new String[]{
                            "https://m.media-amazon.com/images/I/61WQ0mBtBYL._AC_SX425_.jpg",
                            "https://m.media-amazon.com/images/I/61asiPXpTVL._AC_SX425_.jpg"
                    }))
                    .build();
            service.createItem(item);

            item = Items.builder()
                    .name("JBL PartyBox 310")
                    .price(699.98)
                    .category("Speaker")
                    .description("""
                            Portable Bluetooth Party Speaker with Dazzling Lights and Powerful JBL Pro Sound - Black\s
                            (JBLPARTYBOX310AM)\s
                            """)
                    .pictures(Arrays.asList(new String[]{
                            "https://m.media-amazon.com/images/I/71OAwJLcnuL._AC_SY879_.jpg",
                            "https://m.media-amazon.com/images/I/81gis5nljJL._AC_SX425_.jpg",
                            "https://m.media-amazon.com/images/I/51MsBSthXkL._AC_SY879_.jpg"
                    }))
                    .build();
            service.createItem(item);

            item = Items.builder()
                    .name("Lenovo ThinkPad T470")
                    .price(270)
                    .category("Laptop")
                    .description("""
                            14in Full HD FHD (1920x1080) Business Laptop (Intel Core i5-6300U, 8GB DDR4 RAM, 256GB SSD)\s
                            Thunderbolt, Type-C, HDMI RJ-45, Windows 10 Professional 64 Bit (Renewed)\s
                            """)
                    .pictures(Arrays.asList(new String[]{
                            "https://m.media-amazon.com/images/I/411w1GoUzVL._AC_SY355_.jpg",
                            "https://m.media-amazon.com/images/I/51Ikux-sZaL._AC_SY355_.jpg",
                            "https://m.media-amazon.com/images/I/51QsIZPxfjL._AC_SY355_.jpg",
                            "https://m.media-amazon.com/images/I/51PIOLXXmfL._AC_SX355_.jpg"
                    }))
                    .build();
            service.createItem(item);

            item = Items.builder()
                    .name("ASUS VivoBook 15")
                    .price(369)
                    .category("Laptop")
                    .description("""
                            Thin and Light Laptop, 15.6” HD Display,Intel Pentium,4GB RAM,128GB SSD,Windows 11 Home in\s
                            S Mode + 1 Year Microsoft 365 Personal, X515MA-AH09-CA\s
                            """)
                    .pictures(Arrays.asList(new String[]{
                            "https://m.media-amazon.com/images/I/71HEF+d4UEL._AC_SX355_.jpg",
                            "https://m.media-amazon.com/images/I/71GF6ibKkwL._AC_SX355_.jpg",
                            "https://m.media-amazon.com/images/I/81oVSSITRQL._AC_SX355_.jpg"
                    }))
                    .build();
            service.createItem(item);
        };
    }

    @Bean
    @Order(2)
    public CommandLineRunner createUsers(AuthenticationService service) {
        return args -> {
            var admin = RegisterRequest.builder()
                    .firstname("AdminN")
                    .lastname("AdminL")
                    .email("admin@mail.com")
                    .password("admin_password")
                    .street("admin_street")
                    .city("admin_city")
                    .country("admin_country")
                    .postalCode("l4f3f5".toUpperCase())
                    .role(ADMIN)
                    .build();
            System.out.println("Admin token: " + service.create(admin).getAccessToken());

            var manager = RegisterRequest.builder()
                    .firstname("ManagerN")
                    .lastname("ManagerL")
                    .email("manager@mail.com")
                    .password("manager_password")
                    .street("manager_street")
                    .city("manager_city")
                    .country("manager_country")
                    .postalCode("l4f3f6".toUpperCase())
                    .role(MANAGER)
                    .build();
            System.out.println("Manager token: " + service.create(manager).getAccessToken());

            var user = RegisterRequest.builder()
                    .firstname("userN")
                    .lastname("userL")
                    .email("user@mail.com")
                    .password("user_password")
                    .street("user_street")
                    .city("user_city")
                    .country("user_country")
                    .postalCode("l4f3f6".toUpperCase())
                    .role(USER)
                    .build();
            System.out.println("User token: " + service.create(user).getAccessToken());

            var user1 = RegisterRequest.builder()
                    .firstname("userN")
                    .lastname("userL")
                    .email("user1@mail.com")
                    .password("user_password")
                    .street("user1_street")
                    .city("user1_city")
                    .country("user1_country")
                    .postalCode("m4f3f6".toUpperCase())
                    .role(USER)
                    .build();
            System.out.println("User1 token: " + service.create(user1).getAccessToken());
        };
    }

}
