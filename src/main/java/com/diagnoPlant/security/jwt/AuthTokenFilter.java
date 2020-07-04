package com.diagnoPlant.security.jwt;


import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.diagnoPlant.services.AdminDetailsServiceImpl;
import com.diagnoPlant.services.ExpertDetailsServiceImpl;
import com.diagnoPlant.services.UserDetailsImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.diagnoPlant.services.AgricultureDetailsServiceImpl;

public class AuthTokenFilter extends OncePerRequestFilter {
    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AgricultureDetailsServiceImpl agricultureDetailsService;

    @Autowired
    private ExpertDetailsServiceImpl expertDetailsService;

    @Autowired
    private AdminDetailsServiceImpl adminDetailsService;

    private static final Logger logger = LoggerFactory.getLogger(AuthTokenFilter.class);

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String jwt = parseJwt(request);
            if (jwt != null && jwtUtils.validateJwtToken(jwt)) {
                String username = jwtUtils.getUserNameFromJwtToken(jwt);
                String userType = request.getHeader("User-type");
                UserDetails userDetails;

                switch (userType) {

                    case UserDetailsImpl
                            .AGRICULTURE: userDetails = agricultureDetailsService.loadUserByUsername(username);
                            break;
                    case UserDetailsImpl
                            .EXPERT: userDetails = expertDetailsService.loadUserByUsername(username);
                            break;
                    case UserDetailsImpl
                            .ADMIN: userDetails = adminDetailsService.loadUserByUsername(username);
                            break;
                    default:
                        userDetails = null;
                }

                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception e) {
            logger.error("Cannot set user authentication: {}", e);
        }

        logger.info("request forwarded " + request.getServletPath() );
        filterChain.doFilter(request, response);
    }

    private String parseJwt(HttpServletRequest request) {
        String headerAuth = request.getHeader("Authorization");

        if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
            return headerAuth.substring(7, headerAuth.length());
        }

        return null;
    }
}