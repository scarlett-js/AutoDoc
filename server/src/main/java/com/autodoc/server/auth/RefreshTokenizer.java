package com.autodoc.server.auth;

import com.autodoc.server.auth.filter.JwtAuthenticationFilter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/refresh")
@RestController
public class RefreshTokenizer {
//    private final JwtAuthenticationFilter filter;
//
//    public RefreshTokenizer(JwtAuthenticationFilter filter) {
//        this.filter = filter;
//    }

    @GetMapping
    public ResponseEntity createRefreshToken(Authentication authentication){
        String email = authentication.getPrincipal().toString();

        return new ResponseEntity(email, HttpStatus.OK);
    }
}
