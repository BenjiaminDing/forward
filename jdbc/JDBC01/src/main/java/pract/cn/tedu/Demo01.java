package pract.cn.tedu;/*
Create by Benjiamin at2021/3/17  19:44 JDBC01
*/

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Demo01 {
    public static void main(String[] args) throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/newdb3?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&rewriteBatchedStatements=true",
                "root","root");
        Statement sx=conn.createStatement();
        String sql="create table jdbct1( id int ,name varchar(20))";
        sx.execute(sql);
        conn.close();
        System.out.println("执行完成!!");
    }
}
