package com.dzykov.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static com.dzykov.user.Role.ADMIN;
import static com.dzykov.user.Role.MANAGER;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // NOTE: Official docs recommend using DEFAULTS + BEAN ANNOTATION; however, it is not universal solution
                // Passing UrlBasedCorsConfigurationSource is more direct approach
                .cors(cors -> cors.configurationSource(CorsConfigurationSource()))
                // NOTE: frame options are disabled for rendering swagger-ui in frontend as iframe
                .headers( headers ->
                        headers
                                .frameOptions(HeadersConfigurer.FrameOptionsConfig::disable))
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api-docs/**").permitAll()
                                .requestMatchers("/swagger.html").permitAll()
                                .requestMatchers("/swagger-ui/**").permitAll()
                                .requestMatchers(Endpoints.userEndpoint + Endpoints.allEndings).authenticated()
                                .requestMatchers(Endpoints.cartEndpoint + Endpoints.allEndings).authenticated()
                                .requestMatchers(Endpoints.authEndpoint + Endpoints.allEndings).permitAll()
                                .requestMatchers(Endpoints.generalEndpoint + Endpoints.allEndings).permitAll()
                                .requestMatchers(Endpoints.itemsEndpoint + Endpoints.allEndings).permitAll()
                                .requestMatchers(Endpoints.secureEndpoint + Endpoints.allEndings).authenticated()
                                .requestMatchers(Endpoints.managementEndpoint + Endpoints.allEndings).hasAnyRole(ADMIN.name(), MANAGER.name())
                                //.requestMatchers(GET, "/api/management/**").hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
                                //.requestMatchers(POST, "/api/management/**").hasAnyAuthority(ADMIN_CREATE.name(), MANAGER_CREATE.name())
                                //.requestMatchers(PUT, "/api/management/**").hasAnyAuthority(ADMIN_UPDATE.name(), MANAGER_UPDATE.name())
                                //.requestMatchers(DELETE, "/api/management/**").hasAnyAuthority(ADMIN_DELETE.name(), MANAGER_DELETE.name())
                                .anyRequest().authenticated()
                )
                .sessionManagement((session) ->
                        session
                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout(logout ->
                        logout
                                .permitAll()
                                .addLogoutHandler(logoutHandler)
                                .logoutUrl(Endpoints.logoutEndpoint)
                                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
                                .invalidateHttpSession(true)
                );
        return http.build();
    }

    @Bean // BEAN ANNOTATION IS NOT NEEDED
    public CorsConfigurationSource CorsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("http://localhost:5173");
        configuration.addAllowedOrigin("http://127.0.0.1:5173");
        configuration.setAllowedHeaders(Arrays.asList("http://localhost:5173", "http://127.0.0.1:5173"));
        configuration.addAllowedMethod("GET");
        configuration.addAllowedMethod("PULL");
        configuration.addAllowedMethod("POST");
        configuration.addAllowedMethod("DELETE");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
