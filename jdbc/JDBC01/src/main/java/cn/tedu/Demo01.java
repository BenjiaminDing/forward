package cn.tedu;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

//create at 0315/14:51  数据库
public class Demo01 {
    public static void main(String[] args) throws Exception {
        //01 注册驱动--告诉编译器使用的数据库是什么--(这里使用反射的知识)
        Class.forName("com.mysql.cj.jdbc.Driver");
        //02 获取连接对象conn--url 数据库的地址--user用户名--password 终端地址--newdb3 是你要读取的数据库
        Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/newdb3?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&rewriteBatchedStatements=true",
                "root","root");
        System.out.println(conn);
       //  03 创建执行SQL语句的对象
        Statement sx=conn.createStatement();
        // 04执行 SQL 语句
        String sql="create table jdbct1(id int,name varchar(20))";
        sx.execute(sql);
        //05 关闭资源
        conn.close();
        System.out.println("执行完成");

/*        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connx=DriverManager.getConnection("","","");

        // 03 创建执行SQL语句的对象
         Statement s=connx.createStatement();
         // 04 执行SQL语句
        String sqlx="test";
        s.execute(sqlx);
        connx.close();;
        System.out.println("SQL语句执行完成!!");*/
    }
}
