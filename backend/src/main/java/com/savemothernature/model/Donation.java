package com.savemothernature.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String donorName;
    private double amount;
    private LocalDateTime date = LocalDateTime.now();

    // Getters and Setters
}
