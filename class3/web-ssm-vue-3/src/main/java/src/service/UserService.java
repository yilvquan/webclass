package src.service;

import src.user.User;

import java.io.IOException;
import java.util.List;

public interface UserService {
    public List<User> find(User user) throws IOException;
    public void insert(User user) throws IOException;
}
