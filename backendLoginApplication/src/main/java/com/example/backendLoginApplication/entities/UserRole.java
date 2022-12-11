package com.example.backendLoginApplication.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int userId;
    private int roleId;

    public UserRole(){}

    public UserRole(int userId, int roleId){
        this.userId = userId;
        this.roleId = roleId;
    }

    public int getUserId() { return this.userId; }
    public void setUserId(int userId){ this.userId = userId; }

    public int getRoleId(){ return this.roleId; }
    public void setRoleId(int roleId){ this.roleId = roleId; }

}
