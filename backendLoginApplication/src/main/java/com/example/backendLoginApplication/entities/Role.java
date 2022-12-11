package com.example.backendLoginApplication.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String roleName;

    public Role(){}

    public Role(String roleName){ this.roleName = roleName; }

    public int getId(){ return this.id; }
    public void setId(int id){ this.id = id; }

    public String getRoleName(){ return this.roleName; }
    public void setRoleName(){ this.roleName = roleName; }
}
