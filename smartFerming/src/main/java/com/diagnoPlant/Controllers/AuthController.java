package com.diagnoPlant.Controllers;


import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.diagnoPlant.Models.*;
import com.diagnoPlant.Repositorys.AdminRepository;
import com.diagnoPlant.Repositorys.ExpertRepository;
import com.diagnoPlant.Repositorys.RoleRepository;
import com.diagnoPlant.Repositorys.AgricultureRepository;
import com.diagnoPlant.payload.request.SignupRequest;
import com.diagnoPlant.payload.response.ResponseMessage;
import com.diagnoPlant.security.authProviders.AdminAuthenticationProvider;
import com.diagnoPlant.security.authProviders.ExpertAuthenticationProvider;
import com.diagnoPlant.security.authProviders.AgricultureAuthenticationProvider;
import com.diagnoPlant.security.jwt.JwtUtils;
import com.diagnoPlant.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import com.diagnoPlant.payload.request.LoginRequest;
import com.diagnoPlant.payload.response.JwtResponse;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AdminAuthenticationProvider adminAuthenticationProvider;
    @Autowired
    ExpertAuthenticationProvider expertAuthenticationProvider;

    @Autowired
    AgricultureAuthenticationProvider agricultureAuthenticationProvider;

    @Autowired
    AgricultureRepository agricultureRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    AdminRepository adminRepository;

    @Autowired
    ExpertRepository expertRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    /**
     * Authentifie l'admin
     * @param loginRequest
     * @return JwtResponse
     */
    @PostMapping("/admin/signin")
    public ResponseEntity<?> authenticateAdmin(@Valid @RequestBody LoginRequest loginRequest) {
        return authenticate(loginRequest, adminAuthenticationProvider);
    }

    /**
     * Authentifie l'expert
     * @param loginRequest
     * @return JwtResponse
     */
    @PostMapping("/expert/signin")
    public ResponseEntity<?> authenticateExpert(@Valid @RequestBody LoginRequest loginRequest) {
        return authenticate(loginRequest, expertAuthenticationProvider);
    }

    /**
     * Authentifie l'agriculture
     * @param loginRequest
     * @return JwtResponse
     */
    @PostMapping("/agriculture/signin")
    public ResponseEntity<?> authenticateAgriculcture(@Valid @RequestBody LoginRequest loginRequest) {
        return authenticate(loginRequest, agricultureAuthenticationProvider);
    }

    /**
     * @param loginRequest
     * @return JwtResponse
     */
    public ResponseEntity<?> authenticate(@Valid @RequestBody LoginRequest loginRequest, DaoAuthenticationProvider daoAuthenticationProvider) {
        System.out.println(":::::::::::::::::::::::::::::::::::: SIGNIN");
        System.out.println(":::::::::::::::::::username : " + loginRequest.getUsername());
        System.out.println(":::::::::::::::::::password : " + loginRequest.getPassword());

        try {
            Authentication authentication = daoAuthenticationProvider.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
            System.out.println("::::::::::::::::::: after authenticationManager : " + loginRequest.getUsername());
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);

            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            List<String> roles = userDetails.getAuthorities().stream()
                    .map(item -> item.getAuthority())
                    .collect(Collectors.toList());

            return ResponseEntity.ok(new JwtResponse(jwt,
                    userDetails.getId(),
                    userDetails.getUsername(),
                    userDetails.getEmail(),
                    userDetails.getUserType(),
                    roles));
        }catch (AuthenticationException ex) {
            System.out.println(ex);
            return  ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage("Bad Credentials"));
        }


    }

    /**
     * Admin Inscription
     * @param signUpRequest
     * @return MessageResponse
     */
    @PostMapping("/admin/signup")
    public ResponseEntity<ResponseMessage> registerAdmin(@Valid @RequestBody SignupRequest signUpRequest) {
        if (adminRepository.existsByUsername(signUpRequest.getUsername())){
            return ResponseEntity
                            .badRequest()
                            .body(new ResponseMessage("Error: Username is already taken!"));
        }

        if (adminRepository.existsByEmail(signUpRequest.getEmail())){
            return ResponseEntity
                            .badRequest()
                            .body(new ResponseMessage("Error: Email is already in use!"));
        }
        //create new user's account
        Admin user = new Admin();
        user.setUsername(signUpRequest.getUsername());
        user.setLastname(signUpRequest.getLastname());
        user.setFirstname(signUpRequest.getFirstname());
        user.setEmail( signUpRequest.getEmail());
        user.setPassword(encoder.encode(signUpRequest.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        roles.add(adminRole);
        roles.add(userRole);
        user.setRoles(roles);
        adminRepository.save(user);

        return ResponseEntity.ok(new ResponseMessage("Admin registered successfully!"));
    }

    /**
     * Admin Inscription
     * @param signUpRequest
     * @return MessageResponse
     */
    @PostMapping("/expert/signup")
    public ResponseEntity<ResponseMessage> registerExpert(@Valid @RequestBody SignupRequest signUpRequest) {
        if (expertRepository.existsByUsername(signUpRequest.getUsername())){
            return ResponseEntity
                            .badRequest()
                            .body(new ResponseMessage("Error: Username is already taken!"));
        }

        if (expertRepository.existsByEmail(signUpRequest.getEmail())){
            return ResponseEntity
                        .badRequest()
                        .body(new ResponseMessage("Error: Email is already in use!"));
        }

        //create new user's account
        Expert user = new Expert();
        user.setUsername(signUpRequest.getUsername());
        user.setLastname(signUpRequest.getLastname());
        user.setFirstname(signUpRequest.getFirstname());
        user.setEmail( signUpRequest.getEmail());
        user.setPassword(encoder.encode(signUpRequest.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role expertRole = roleRepository.findByName(ERole.ROLE_EXPERT)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        roles.add(expertRole);
        roles.add(userRole);
        user.setRoles(roles);
        expertRepository.save(user);

        return ResponseEntity.ok(new ResponseMessage("Expert registered successfully!"));
    }

    /**
     * Admin Inscription
     * @param signUpRequest
     * @return MessageResponse
     */
    @PostMapping("/agriculture/signup")
    public ResponseEntity<ResponseMessage> registerAgriculure(@Valid @RequestBody SignupRequest signUpRequest) {
        if (agricultureRepository.existsByUsername(signUpRequest.getUsername())){
            return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage("Error: Username is already taken!"));
        }

        if (agricultureRepository.existsByEmail(signUpRequest.getEmail())){
            return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage("Error: Email is already in use!"));
        }

        //create new user's account
        Agriculture user = new Agriculture();
        user.setUsername(signUpRequest.getUsername());
        user.setLastName(signUpRequest.getLastname());
        user.setFirstName(signUpRequest.getFirstname());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(encoder.encode(signUpRequest.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role expertRole = roleRepository.findByName(ERole.ROLE_AGRICULTURE)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        roles.add(expertRole);
        roles.add(userRole);
        user.setRoles(roles);
        agricultureRepository.save(user);

        return ResponseEntity.ok(new ResponseMessage("Agriculture registered successfully!"));
    }

    @GetMapping("/user")
    public ResponseEntity<?> getAuthenticatedUser(){

        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String jwt = jwtUtils.generateJwtToken(authentication);
            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            List<String> roles = userDetails.getAuthorities().stream()
                    .map(item -> item.getAuthority())
                    .collect(Collectors.toList());

            return ResponseEntity.ok(new JwtResponse(jwt,
                    userDetails.getId(),
                    userDetails.getUsername(),
                    userDetails.getEmail(),
                    userDetails.getUserType(),
                    roles));
        }catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ResponseMessage("bad credentials"));
        }

    }
}