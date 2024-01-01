package cn.tedu;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Demo03 {
    // 可以不使用main方法执行代码 ---单元测试
    @Test
    public void Test01() throws Exception {

        System.out.println("Test01");
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection  conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/newdb3?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&rewriteBatchedStatements=true",
                "root","root");
        Statement sx=conn.createStatement();
        String  sql= "insert into emp(empno, ename) values(101,'灭霸')";
        sx.executeUpdate(sql);
        conn.close();
        System.out.println("插入完毕!!!");



    }
    @Test
    public void Test02() throws Exception {
        //灭霸---超人
        System.out.println("Test02");
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection  conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/newdb3?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&rewriteBatchedStatements=true",
                "root","root");
        Statement sx=conn.createStatement();
        String  sql= "update emp set ename='超人' where ename='灭霸'";
        sx.executeUpdate(sql);
        conn.close();
        System.out.println("修改完毕!!!");
    }
    @Test
    public void Test03() throws Exception {
        // 超人 删除
        System.out.println("Test03");
        //灭霸---超人

        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection  conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/newdb3?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&rewriteBatchedStatements=true",
                "root","root");
        Statement sx=conn.createStatement();
        String  sql= "delete from emp where ename='超人'";
        sx.executeUpdate(sql);
        conn.close();
        System.out.println("删除---完毕!!!");

    }
    @Test
    public void Test04() throws Exception {
        System.out.println("test04");
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection  conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/newdb3?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&rewriteBatchedStatements=true",
                "root","root");
        Statement sx=conn.createStatement();
        String  sql="select*from emp";
        ResultSet rs=sx.executeQuery(sql);//executeQuery()  用于查询的作用
        //便利结果集中的数据
        while(rs.next()){
//              getDouble()   getString

            String name=rs.getString("ename");
            double sal=rs.getDouble("sal");
            System.out.println(name+":"+sal);
        }
        conn.close();

    }
}
//   查是独立的方法  ,
/*  ResultSet   是一个结果集 (集合)   游标的作用*/