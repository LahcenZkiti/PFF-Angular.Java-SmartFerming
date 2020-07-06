package com.diagnoPlant.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;


/**
 *  classe "Admin"
 * @author ZkitiDev
 *
 */
@Entity
@Table(	name = "admins",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
public class Admin {

    @Id
    @GeneratedValue
    private Long id;
    @Size(max = 20)
    @NotBlank
    private String firstname;
    @Size(max = 20)
    @NotBlank
    private String lastname;
    @Size(max = 100)
    @NotBlank
    @Email
    private String email;
    @Size(max = 50)
    @NotBlank
    private String username;
    @Size(max = 120)
    @NotBlank
    @JsonIgnore
    private String password;
    @NotNull
    @ManyToMany(fetch = FetchType.LAZY)
    private Set<Role> roles = new HashSet<>();

    public Admin(Long id, @Size(max = 20) @NotBlank String firstname, @Size(max = 20) @NotBlank String lastname,
                 @Size(max = 100) @NotBlank @Email String email, @Size(max = 50) @NotBlank String username,
                 @Size(max = 50) @NotBlank String password, @NotNull Set<Role> roles) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    public Admin() {
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
