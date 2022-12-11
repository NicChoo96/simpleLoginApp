package com.example.backendLoginApplication.requestResponseBody;

public class UserRoleData {
    public String name;
    public String userName;
    public String role;

    public UserRoleData(){
        this.name = "";
        this.userName = "";
        this.role = "default";
    }

    public UserRoleData(String name, String userName, String role){
        this.name = name;
        this.userName = userName;
        this.role = role;
    }

}
