package com.example.backendLoginApplication.controllers;

import com.example.backendLoginApplication.entities.User;
import com.example.backendLoginApplication.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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

        if(foundUser == null) return new User("Not Found", "", "");

        return foundUser;
    }
}
