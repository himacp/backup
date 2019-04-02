package com.stackroute.services;

public class UserInformation {
    public UserInformation(String name, String password, DatabaseConnection databaseConnection)
    {
        this.name = name;
        this.password = password;
        this.databaseConnection = databaseConnection;
    }

    private String name;
    private String password;
    private DatabaseConnection databaseConnection;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public UserInformation(String name, String password) {
//        databaseConnection = new DatabaseConnection();
//        this.name = name;
//        this.password = password;
//        databaseConnection.setData(name, password);
//    }
}