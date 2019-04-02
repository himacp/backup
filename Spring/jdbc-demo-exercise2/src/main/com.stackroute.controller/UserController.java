package com.stackroute.controller;

import com.stackroute.services.UserInformation;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class UserController {

    public String view(ModelMap map){
        return "index";
    }

    @RequestMapping("populate")
    public ModelAndView populate(@RequestParam("name") String name, @RequestParam("password") String password){
        UserInformation user1 = new UserInformation(name,password);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("result");
        modelAndView.addObject("greeting1",user1.getName());
        return modelAndView;
    }
}
