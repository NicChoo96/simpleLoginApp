package com.example.backendLoginApplication.entities;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name="role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name="role_name")
    private String roleName;

    @OneToMany(mappedBy = "role")
    private Set<UserRole> userRole;

    public Role(){}

    public Role(String roleName){ this.roleName = roleName; }

    public int getId(){ return this.id; }
    public void setId(int id){ this.id = id; }

    public String getRoleName(){ return this.roleName; }
    public void setRoleName(){ this.roleName = roleName; }
}
