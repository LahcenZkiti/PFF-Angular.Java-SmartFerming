package com.diagnoPlant.Repositorys;

import com.diagnoPlant.Models.Agriculture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AgricultureRepository extends JpaRepository<Agriculture, Long> {
    Optional<Agriculture> findByUsername(String username);
    Optional<Agriculture> findByEmail(String email);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    void deleteByEmail(String email);
}
