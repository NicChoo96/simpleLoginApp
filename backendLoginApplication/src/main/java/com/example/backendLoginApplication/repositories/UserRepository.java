package com.example.backendLoginApplication.repositories;

import com.example.backendLoginApplication.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    @Query("SELECT u FROM User u where u.name = ?1")
    User findUserByName(String name);
}