import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class MyServlet1 extends HttpServlet {
    // logged in servlet
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
    static final String DB_URL="jdbc:mysql://localhost:3306/users";

    static final String USER = "root";
    static final String PASS = "mysql";

    public void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
       
        out.println(
            "<html>\n" +
            "<head><link rel='stylesheet' href='styles.css'></head>\n" +
            "<body><h1>hello</h1></body></html>\n");

        try {
            // Register JDBC driver
            Class.forName(JDBC_DRIVER);

            // Open a connection
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            
            // Execute SQL query
            Statement stmt = conn.createStatement();
            String sql; 
            sql = "SELECT * FROM users WHERE username = " + request.getParameter("username");
            ResultSet rs = stmt.executeQuery(sql);

            // Extract data from result set
            while (rs.next()) {
                //Retrieve by column name
                String uname = rs.getString("username");
                String pword = rs.getString("password");

                if (pword == request.getParameter("password")) {
                    HttpSession session = request.getSession();
                    if (session.isNew()) {
                        session.setAttribute("uname", request.getParameter("username"));
                    }
                    out.print("<h2 style='text-align:center;'>Hello " + uname + "</h2>");
                    out.print("<a href='localhost:8080/MyServlet2' class='button'>View Profile in Detail</a><br>");
                }
                else {
                    out.print("<h2 style='text-align:center;'>Hello " + uname + "</h2>");
                }
            }

            out.println("</body></html>");

            // Clean-up environment
            rs.close();
            stmt.close();
            conn.close();
        } 
        catch(SQLException se) {
            //Handle errors for JDBC
            System.out.println(se);
        } 
        catch(Exception e) {
            //Handle errors for Class.forName
            System.out.println(e);
        } 
        finally {
        
        }
    }
} 