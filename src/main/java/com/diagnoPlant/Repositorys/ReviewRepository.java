package com.diagnoPlant.Repositorys;

import com.diagnoPlant.Models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
