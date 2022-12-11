package com.example.backendLoginApplication.repositories;

import com.example.backendLoginApplication.entities.UserRole;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRoleRepository extends CrudRepository<UserRole, Integer> {



//    @Query("SELECT u FROM User u where u.name = ?1")
//    User findUserByName(String name);
//
//    @Query("SELECT u FROM User u where u.userName = ?1")
//    User findUserByUsername(String userName);
}
