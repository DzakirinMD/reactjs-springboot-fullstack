package com.springbootbackend.controller;

import com.springbootbackend.exception.ResourceNotFoundException;
import com.springbootbackend.model.Accounts;
import com.springbootbackend.repository.AccountsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/v1/")
public class AccountsController {

    @Autowired
    private AccountsRepository accountsRepository;

    // Get all accounts
    @GetMapping("/accounts")
    public List<Accounts> getAllAccounts() {
        return accountsRepository.findAll();
    }

    // Get accounts by id
    @GetMapping("/accounts/{id}")
    public ResponseEntity<Accounts> getAccountsById(@PathVariable Long id){

        Accounts accounts = accountsRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Account not exist with id : " + id));

        return ResponseEntity.ok(accounts);
    }

    // Create accounts
    @PostMapping("/accounts")
    public Accounts createAccount(@RequestBody Accounts accounts) {
        return accountsRepository.save(accounts);
    }
}
