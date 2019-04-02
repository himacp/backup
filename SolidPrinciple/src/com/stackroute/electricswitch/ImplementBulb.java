package com.stackroute.electricswitch;

public class ImplementBulb {
    public static void  main(String args[]){
        Bulb bulbobject=new Bulb();
        Switch switchobject=new Switch();

        bulbobject.setBulbId(1);
        System.out.println(bulbobject.getBulbId());

        bulbobject.setColour("blue");
        System.out.println(bulbobject.getColour());

        bulbobject.setCapacity("5 Watt");
        System.out.println(bulbobject.getColour());

        bulbobject.setLocation("DrawingRoom");
        System.out.println(bulbobject.getLocation());

        switchobject.setState(true);
        System.out.println(switchobject.isState());

        switchobject.setCurrentflow(false);
        System.out.println(switchobject.isCurrentflow());

        if(switchobject.isState()==true && switchobject.isCurrentflow()==true)
            bulbobject.setState("on");
        else
            bulbobject.setState("off");

        System.out.println("Bulb is:" + bulbobject.getState());
    }


}
