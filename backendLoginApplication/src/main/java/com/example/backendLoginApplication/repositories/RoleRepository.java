package com.example.backendLoginApplication.repositories;

import com.example.backendLoginApplication.entities.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Integer> {
}