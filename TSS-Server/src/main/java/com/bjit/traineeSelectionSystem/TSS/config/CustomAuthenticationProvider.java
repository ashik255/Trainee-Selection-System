package com.bjit.traineeSelectionSystem.TSS.config;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CustomAuthenticationProvider implements AuthenticationProvider {
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        if (userDetails == null) {
            throw new BadCredentialsException("INVALID_EMAIL");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("INVALID_PASSWORD");
        }
        return new UsernamePasswordAuthenticationToken(username, password, userDetails.getAuthorities());
    }

    @Override
    public boolean supports(Class<?> authenticationType) {
        return authenticationType.equals(UsernamePasswordAuthenticationToken.class);
    }

//    public ResponseEntity<ResponseModel> login(LoginRequest loginRequest) {
//        try {
//            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
//        } catch (Exception ex) {
//            throw new InvalidAuthenticationCredentials("Invalid Email and Password");
//        }
//        String jwtToken = jwtService.generateToken(userDetailsService.loadUserByUsername(loginRequest.getEmail()));
//        LoginResponse loginResponse = LoginResponse.builder().token(jwtToken).build();
//        return new ResponseEntity<>(ResponseModel.builder().data(loginResponse).build(), HttpStatus.OK);
//    }
//    }

//    public ResponseEntity<ResponseModel> login(LoginRequest loginRequest) {
//
//    }

//    public ResponseEntity<ResponseModel> login(LoginRequest loginRequest) {
//    }
}