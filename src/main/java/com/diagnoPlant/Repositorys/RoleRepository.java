package com.diagnoPlant.Repositorys;

import com.diagnoPlant.Models.ERole;
import com.diagnoPlant.Models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
