package com.bjit.traineeSelectionSystem.TSS.config;

import com.bjit.traineeSelectionSystem.TSS.entity.UserEntity;
import com.bjit.traineeSelectionSystem.TSS.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final UserRepository userRepository;

    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
                var user = userRepository.findByEmail(email);
                if (user.isEmpty()) {
                    throw new BadCredentialsException("INVALID_EMAIL");
                }
                UserEntity accountEntity = user.get();
                List<SimpleGrantedAuthority> authorities = new ArrayList<>();
                accountEntity.getRoles().forEach(roleEntity -> authorities.add(new SimpleGrantedAuthority(roleEntity.getRoleName())));
                return new User(
                        accountEntity.getEmail(), accountEntity.getPassword(), authorities
                );
            }
        };
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
