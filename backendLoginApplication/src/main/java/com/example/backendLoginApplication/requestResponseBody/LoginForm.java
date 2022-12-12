package com.example.backendLoginApplication.requestResponseBody;

public class LoginForm {
    private String userName;
    private String password;

    public String getUsername(){ return this.userName; }
    public void setUsername(String userName){this.userName = userName;}

    public String getPassword(){ return this.password; }
    public void setPassword(String password){ this.password = password; }

    public String toString(){
        return("UserName: " + this.userName + "/Password: " + this.password);
    }
}
