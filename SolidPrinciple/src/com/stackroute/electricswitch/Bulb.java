package com.stackroute.electricswitch;
public class Bulb {

    private int bulbId;
    private String colour;
    private String capacity;
    private String location;

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    private String state;

    public int getBulbId() {
        return bulbId;
    }

    public void setBulbId(int bulbId) {
        this.bulbId = bulbId;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }


}