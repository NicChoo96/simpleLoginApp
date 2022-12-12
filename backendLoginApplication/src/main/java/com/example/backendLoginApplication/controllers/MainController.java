package com.example.backendLoginApplication.controllers;

import com.example.backendLoginApplication.entities.Role;
import com.example.backendLoginApplication.entities.User;
import com.example.backendLoginApplication.entities.UserRole;
import com.example.backendLoginApplication.repositories.UserRepository;
import com.example.backendLoginApplication.repositories.UserRoleRepository;
import com.example.backendLoginApplication.requestResponseBody.LoginForm;
import com.sun.tools.javac.Main;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Controller
@RequestMapping(path="/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class MainController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

//    @GetMapping(path="/user/getAll")
//    public @ResponseBody Collection<User> getUserAll () {
//        return (Collection<User>) userRepository.findAll();
//    }
//
//    @GetMapping(path="/user")
//    public @ResponseBody User getUser(@RequestParam(value="name") String name){
//        User foundUser = userRepository.findUserByName(name);
//
//        if(foundUser == null) return null;
//
//        return foundUser;
//    }

    // Given username and password Post request, match with DB after password encryption is hashed again
    @PostMapping(path="/login")
    public @ResponseBody UserRole loginWithUserNamePassword(@RequestBody LoginForm loginUser){

        // Search user by username
        User foundUser = userRepository.findUserByUsername(loginUser.getUsername());

        // user not found from DB
        if(foundUser == null) return null;

        // Matched input password with bcrypt hashed password in DB
        if(foundUser.matchPassword(loginUser.getPassword())){

            UserRole foundUserRole = userRoleRepository.getRoleByUser(foundUser.getId());

            if(foundUserRole == null) return null;

            return foundUserRole;
        }

        return null;
    }
}
