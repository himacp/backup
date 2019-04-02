package com.stackroute.electricswitch;

public class Switch {
    private int switchbId;
    private boolean state;
    private boolean currentflow;
    private int bulbId;

    public int getSwitchbId() {
        return switchbId;
    }

    public void setSwitchbId(int switchbId) {
        this.switchbId = switchbId;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    public boolean isCurrentflow() {
        return currentflow;
    }

    public void setCurrentflow(boolean currentflow) {
        this.currentflow = currentflow;
    }

    public int getBulbId() {
        return bulbId;
    }

    public void setBulbId(int bulbId) {
        this.bulbId = bulbId;
    }

}
