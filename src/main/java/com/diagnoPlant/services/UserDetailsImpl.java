package com.diagnoPlant.services;

import com.diagnoPlant.Models.Admin;
import com.diagnoPlant.Models.Agriculture;
import com.diagnoPlant.Models.Expert;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserDetailsImpl implements UserDetails {
    private static final long serialVersionUID = 1L;
 
    public static final String AGRICULTURE =  "AGRICULTURE";
    public static final String EXPERT =  "EXPERT";
    public static final String ADMIN =  "ADMIN";

    private Long id;
    private String username;
    private String email;
    @JsonIgnore
    private String password;
    private String userType;
    private Collection<? extends GrantedAuthority> authorities;
    public UserDetailsImpl(Long id, String username, String email, String password, String userType, Collection<? extends GrantedAuthority> authorities){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.authorities = authorities;
    }


	/**
	 * 
	 * @param admin
	 * @return UserDetailsImpl {@link UserDetailsImpl UserDetailsImpl.class}
	 */
    public static UserDetailsImpl build(Admin admin) {
        List<GrantedAuthority> authorities = admin.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());

        System.out.println("password in db ======================== " + admin.getPassword());
        System.out.println("password in db ======================== " + admin.getEmail());
        System.out.println("password in db ======================== " + admin.getUsername());

        return new UserDetailsImpl(
                admin.getId(),
                admin.getUsername(),
                admin.getEmail(),
                admin.getPassword(),
                ADMIN,
                authorities);
    }


	/**
	 * 
	 * @param agriculture
	 * @return UserDetailsImpl {@link UserDetailsImpl UserDetailsImpl.class}
	 */
    public static UserDetailsImpl build(Agriculture agriculture){
        List<GrantedAuthority> authorities = agriculture.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());

        return new UserDetailsImpl(
                agriculture.getId(),
                agriculture.getUsername(),
                agriculture.getEmail(),
                agriculture.getPassword(),
                AGRICULTURE,
                authorities);
    }
    

	/**
	 * 
	 * @param expert
	 * @return UserDetailsImpl {@link UserDetailsImpl UserDetailsImpl.class}
	 */
    public static UserDetailsImpl build(Expert expert){
        List<GrantedAuthority> authorities = expert.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());

        return new UserDetailsImpl(
                expert.getId(),
                expert.getUsername(),
                expert.getEmail(),
                expert.getPassword(),
                EXPERT,
                authorities);
    }




    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public String getUserType() {
        return userType;
    }


    public void setUserType(String userType) {
        this.userType = userType;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDetailsImpl user = (UserDetailsImpl) o;
        return Objects.equals(id, user.id);
    }
}
