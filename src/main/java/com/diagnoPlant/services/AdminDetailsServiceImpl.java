package com.diagnoPlant.services;

import com.diagnoPlant.Repositorys.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AdminDetailsServiceImpl implements UserDetailsService {
    @Autowired
    AdminRepository adminRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    	System.out.println("username ===================" + username);
        return UserDetailsImpl.build(adminRepository.findByUsername(username)
                        .orElseThrow(() -> new UsernameNotFoundException("Admin Not Found with Username: " + username)));
    }
}