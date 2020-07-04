package com.diagnoPlant.services;

import com.diagnoPlant.Models.Expert;
import com.diagnoPlant.Repositorys.ExpertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExpertDetailsServiceImpl implements UserDetailsService {
    @Autowired
    ExpertRepository expertRepository;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Expert expert = expertRepository.findByUsername(username)
                            .orElseThrow(() -> new  UsernameNotFoundException(""+username));
        return UserDetailsImpl.build(expert);
    }
}
