package com.example.backendLoginApplication.repositories;

import com.example.backendLoginApplication.entities.Role;
import com.example.backendLoginApplication.entities.UserRole;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRoleRepository extends CrudRepository<UserRole, Integer> {

    // With user id, get role id

    @Query("SELECT ur FROM UserRole ur LEFT JOIN User u ON ur.user.id = u.id WHERE u.id = ?1 ")
    UserRole getRoleByUser(int userId);

//    @Query("SELECT u FROM User u where u.name = ?1")
//    User findUserByName(String name);
//
//    @Query("SELECT u FROM User u where u.userName = ?1")
//    User findUserByUsername(String userName);
}
