package src.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import src.service.UserServer;
import src.user.User;

import java.io.IOException;


@Controller
@RequestMapping("/user")
public class UseController {

    UserServer userserver=new UserServer();
    @RequestMapping(value="/Login",params= {"username","password"})
    @ResponseBody
    public String Logining(String username, String password) {

        User user=new User();
        user.setUsername(username);
        user.setPassword(password);
        boolean exits=false;

        try {
            exits=userserver.find(user).isEmpty();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        if (!exits) {
//            return "forward:../Welcome.jsp";
            return "Welcome,"+username;
        } else {
//            return "forward:../LoginError.jsp";
            return "用户名或密码不正确";
        }


    }

    @RequestMapping(value = "/Register", params = {"username", "password", "confirmpassword"})
    @ResponseBody
    public String Registering(String username, String password, String confirmpassword) {

        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        boolean exits = false;

        if (!password.equals(confirmpassword)) {
            return "两次密码不一致";
        } else {
            try {
                exits = userserver.find(user).isEmpty();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            if (exits) {
                try {
                    userserver.insert(user);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
//            return "forward:../Success.jsp";
                return "用户" + username + "已注册成功";
            } else {
//            return "forward:../RegisterError_User.jsp";
                return "用户" + username + "已存在";
            }
        }


    }


}
