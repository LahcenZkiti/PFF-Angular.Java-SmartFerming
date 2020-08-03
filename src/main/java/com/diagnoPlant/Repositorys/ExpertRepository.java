package com.diagnoPlant.Repositorys;

import com.diagnoPlant.Models.Expert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ExpertRepository extends JpaRepository<Expert,Long> {
    Optional<Expert> findByEmail(String email);
    Optional<Expert> findByUsername(String username);

    boolean existsByEmail(String email);
    boolean existsByUsername(String username);

    void deleteByEmail(String email);
}
