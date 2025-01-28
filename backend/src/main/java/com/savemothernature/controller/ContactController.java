package com.savemothernature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;  // Add this import
import com.savemothernature.model.Contact;
import com.savemothernature.repository.ContactRepository;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://43.204.47.71:3000")  // Adjust based on your frontend's URL
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public ResponseEntity<Contact> saveContact(@RequestBody Contact contact) {
        Contact savedContact = contactRepository.save(contact);
        return ResponseEntity.ok(savedContact);
    }
}

