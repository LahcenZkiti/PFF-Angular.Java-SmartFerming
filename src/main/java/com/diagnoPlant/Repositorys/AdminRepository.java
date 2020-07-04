package com.diagnoPlant.Repositorys;

import com.diagnoPlant.Models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Long> {
    Optional<Admin> findByEmail(String email);
    Optional<Admin> findByUsername(String username);

    boolean existsByEmail(String Email);
    boolean existsByUsername(String username);

    void deleteByEmail(String email);
}
