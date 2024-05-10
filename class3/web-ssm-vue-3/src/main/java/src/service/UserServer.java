package src.service;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import src.user.User;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class UserServer implements UserService {
    @Override
    public List<User> find(User user) throws IOException {
        InputStream inputStream= Resources.getResourceAsStream("Mybatis-config.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        SqlSession sqlSession =sqlSessionFactory.openSession();


        List<User> userList = sqlSession.selectList("UserMapper.find",user);
        System.out.println(userList);
        sqlSession.close();
        return userList;
    }

    @Override
    public void insert(User user) throws IOException {
        InputStream inputStream=Resources.getResourceAsStream("Mybatis-config.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        SqlSession sqlSession =sqlSessionFactory.openSession();
        List<User> userList = sqlSession.selectList("UserMapper.add",user);

        sqlSession.commit();
        userList = sqlSession.selectList("UserMapper.find");
        System.out.println(userList);
        sqlSession.close();

    }
}
