package com.example.backendLoginApplication.controllers;

import com.example.backendLoginApplication.entities.User;
import com.example.backendLoginApplication.repositories.UserRepository;
import com.example.backendLoginApplication.requestResponseBody.LoginForm;
import com.example.backendLoginApplication.requestResponseBody.UserRoleData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@Controller
@RequestMapping(path="/api")
public class MainController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="/user/getAll")
    public @ResponseBody Collection<User> getUserAll () {
//        return userRepository.(name);
        return (Collection<User>) userRepository.findAll();
    }

    @GetMapping(path="/user")
    public @ResponseBody User getUser(@RequestParam(value="name") String name){
        User foundUser = userRepository.findUserByName(name);

        if(foundUser == null) return null;

        return foundUser;
    }

    // Given username and password Post request, match with DB after password encryption is hashed again
    @PostMapping(path="/login")
    public @ResponseBody UserRoleData loginWithUserNamePassword(@RequestBody LoginForm loginUser){
        // Search user by username
        User foundUser = userRepository.findUserByUsername(loginUser.getUsername());

        // user not found from DB
        if(foundUser == null) return null;

        if(foundUser.matchPassword(loginUser.getPassword())){

        }

        return null;
    }
}
