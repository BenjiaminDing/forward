package cn.tedu;

import java.sql.Connection;
import java.sql.DriverManager;
//  对sql所有工具 的封装 ,方便直接调用
public class DBUtils {
    public  static Connection  getConn() throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection  conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/newdb3?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&rewriteBatchedStatements=true",
                "root","root");
        return conn;
    }
}
