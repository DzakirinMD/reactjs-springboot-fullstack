package com.springbootbackend.config;

import com.springbootbackend.model.Accounts;
import com.springbootbackend.repository.AccountsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 * This configuration class is for autopopulate DB when created
 */

@Configuration
public class AccountsConfig {

    @Bean
    CommandLineRunner commandLineRunne(AccountsRepository accountsRepository){
        return args -> {

            Accounts accounts1 = new Accounts(
                    "Kepok Leko Bhd",
                    "kepokleko@gmail.com"
            );

            Accounts accounts2 = new Accounts(
                    "ApiAir",
                    "adana@gmail.com"
            );

            accountsRepository.saveAll(List.of(accounts1, accounts2));
        };
    }
}
