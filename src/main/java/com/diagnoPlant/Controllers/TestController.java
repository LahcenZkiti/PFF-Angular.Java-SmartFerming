package com.diagnoPlant.Controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TestController {
    @GetMapping("/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/agriculture")
    @PreAuthorize("hasRole('AGRICULTURE') or hasRole('ADMIN')")
    public String agriculAccess() {
        return "Agriculture Content.";
    }

    @GetMapping("/expert")
    @PreAuthorize("hasRole('EXPERT')")
    public String expertAccess() {
        return "Expert Board.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }
}