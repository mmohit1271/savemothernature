package com.savemothernature.controller;

import com.savemothernature.model.Donation;
import com.savemothernature.service.DonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donations")
@CrossOrigin(origins = "*") // Allow cross-origin requests
public class DonationController {

    @Autowired
    private DonationService donationService;

    @GetMapping
    public List<Donation> getAllDonations() {
        return donationService.getAllDonations();
    }

    @PostMapping
    public Donation saveDonation(@RequestBody Donation donation) {
        return donationService.saveDonation(donation);
    }
}
