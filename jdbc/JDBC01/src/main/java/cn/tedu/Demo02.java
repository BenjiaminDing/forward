package cn.tedu;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Demo02 {
    public static void main(String[] args) throws Exception {
//        //01 注册驱动--高数编译器使用的数据库是什么--(这里使用反射的知识)
//        Class.forName("com.mysql.cj.jdbc.Driver");
//        //02 获取连接对象--url 数据库的地址--user用户名--password 终端地址--newdb3 是你要读取的书
//        Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/newdb3?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&rewriteBatchedStatements=true",
//                "root","root");
//        System.out.println(conn);
//        //  03 创建执行SQL语句的对象
//        Statement sx=conn.createStatement();
//        // 04执行 SQL 语句
//        String sql="drop table jdbct1";
//        sx.execute(sql);
//        //05 关闭资源
//        conn.close();
//        System.out.println("删除表格执行完成");

//        -------------------------------------
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/newdb3?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&rewriteBatchedStatements=true",
                "root","root");
//        System.out.println(conn);
        Statement sx=conn.createStatement();
        String sql="drop table jdbct1";
        sx.execute(sql);
        conn.close();
        System.out.println(" 删除表格执行完毕!!!");
    }
}
