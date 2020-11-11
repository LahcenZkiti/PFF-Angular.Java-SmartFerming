package com.diagnoPlant.security;

import com.diagnoPlant.security.authProviders.AdminAuthenticationProvider;
import com.diagnoPlant.security.authProviders.AgricultureAuthenticationProvider;
import com.diagnoPlant.security.authProviders.ExpertAuthenticationProvider;
import com.diagnoPlant.services.AdminDetailsServiceImpl;
import com.diagnoPlant.services.ExpertDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.diagnoPlant.security.jwt.AuthEntryPointJwt;
import com.diagnoPlant.security.jwt.AuthTokenFilter;
import com.diagnoPlant.services.AgricultureDetailsServiceImpl;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
         securedEnabled = true,
         jsr250Enabled = true,
        prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    AdminDetailsServiceImpl adminDetailsService;
    @Autowired
    ExpertDetailsServiceImpl expertDetailsService;
    @Autowired
    AgricultureDetailsServiceImpl agricultureDetailsService;

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;

    @Bean
    public AuthTokenFilter authenticationJwtTokenFilter() {
        return new AuthTokenFilter();
    }

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.authenticationProvider(getAdminAuthenticationProvider());
        authenticationManagerBuilder.authenticationProvider(getExpertAuthenticationProvider());
        authenticationManagerBuilder.authenticationProvider(getAgricultureAuthenticationProvider());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests()
                .antMatchers("/api/auth/**").permitAll()
                .antMatchers("/api/test/**").permitAll()
                .antMatchers("/api/img/**").permitAll()
                .antMatchers("/api/mld/**").permitAll()
                .antMatchers("/agriculture/**").permitAll()
                .antMatchers("/expert/**").permitAll()
                .antMatchers("/**").permitAll()
                .anyRequest()
                .authenticated();

        http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public AgricultureAuthenticationProvider getAgricultureAuthenticationProvider() {
        AgricultureAuthenticationProvider dao = new AgricultureAuthenticationProvider();
        dao.setUserDetailsService(agricultureDetailsService);
        dao.setPasswordEncoder(passwordEncoder());
        return dao;
    }
    @Bean
    public ExpertAuthenticationProvider getExpertAuthenticationProvider() {
        ExpertAuthenticationProvider dao = new ExpertAuthenticationProvider();
        dao.setUserDetailsService(expertDetailsService);
        dao.setPasswordEncoder(passwordEncoder());
        return dao;
    }

    @Bean
	public AdminAuthenticationProvider getAdminAuthenticationProvider() {
		AdminAuthenticationProvider dao = new AdminAuthenticationProvider();
		dao.setUserDetailsService(adminDetailsService);
		dao.setPasswordEncoder(passwordEncoder());
		return dao;
	}
}