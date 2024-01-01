package cn.tedu;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class Demo04 {
    public static void main(String[] args) {
              try (Connection conn=DBUtils.getConn()){

//                   从执行效率的考虑,不要写 星号 *---
                  Statement s=conn.createStatement();
//                   执行查询SQL
                  ResultSet rs=s.executeQuery(" select  ename, sal from emp ");
                  while (rs.next()){
//                        通过字段名的获取资源
//                      String name=rs.getString("ename");
                      String name=rs.getString(1);
//                        通过字段的位置(ename--1  sal----2) 获取资源
                      double sal=rs.getDouble(2);
                      System.out.println(name+":"+sal);
                  }
                      } catch (Exception e) {
                          e.printStackTrace();
                      }

    }
}
