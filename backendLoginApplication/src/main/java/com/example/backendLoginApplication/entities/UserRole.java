package com.example.backendLoginApplication.entities;

import jakarta.persistence.*;

@Entity
@Table(name="user_role")
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="role_id", referencedColumnName = "id")
    private Role role;

    public UserRole(){}

    public UserRole(User user, Role role){
        this.user = user;
        this.role = role;
    }

    public User getUser() { return this.user; }
    public void setUser(User user){ this.user = user; }

    public Role getRole(){ return this.role; }
    public void setRole(Role role){ this.role = role; }

}
