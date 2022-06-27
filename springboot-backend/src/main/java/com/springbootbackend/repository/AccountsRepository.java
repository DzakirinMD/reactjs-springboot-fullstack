package com.springbootbackend.repository;

import com.springbootbackend.model.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// The parameter passed is the entity and the type of the primary key
@Repository
public interface AccountsRepository extends JpaRepository<Accounts, Long> {
}
