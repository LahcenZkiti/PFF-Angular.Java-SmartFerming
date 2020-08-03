package com.diagnoPlant.services;

import com.diagnoPlant.Models.Agriculture;
import com.diagnoPlant.Repositorys.AgricultureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AgricultureDetailsServiceImpl implements UserDetailsService {
    @Autowired
    AgricultureRepository agricultureRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Agriculture agriculture = agricultureRepository.findByUsername(username)
                                        .orElseThrow(() -> new UsernameNotFoundException("Agriculture Not Found with Username: " + username));

        return UserDetailsImpl.build(agriculture);
    }
}
