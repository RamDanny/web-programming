import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class MyServlet2 extends HttpServlet {
    // profile servlet
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
    static final String DB_URL="jdbc:mysql://localhost:3306/users";

    static final String USER = "root";
    static final String PASS = "ssn@123";

    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        out.println(
            "<html>\n" +
            "<head><link rel='stylesheet' href='styles.css'></head>\n" +
            "<body>\n");
        
        HttpSession session = request.getSession();
        
        try {
            // Register JDBC driver
            Class.forName(JDBC_DRIVER);

            // Open a connection
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            
            // Execute SQL query
            Statement stmt = conn.createStatement();
            String sql; 
            sql = "SELECT * FROM users WHERE username = " + session.getAttribute("uname");
            ResultSet rs = stmt.executeQuery(sql);

            out.print("<table border='2px'>");
            out.print("<tr>");
            out.print("<th>Name</th><th>Age</th><th>ID</th><th>Gender</th><th>Address</th>");
            out.print("</tr>");

            // Extract data from result set
            while (rs.next()) {
                //Retrieve by column name
                String name = rs.getString("uname");
                int age = rs.getInt("age");
                String gender = rs.getString("gender");
                String address = rs.getString("address");

                //Display values
                out.print("<tr>");
                out.print(String.format("<td>%s</td><td>%d</td><td>%s</td><td>%s</td><td>%s</td>", name, age, gender, address));
                out.print("</tr>");
            }

            out.print("</table><br>");
            out.print("<a href='login.html' class='button'>Login Page</a>");
            out.println("</body></html>");

            // Clean-up environment
            rs.close();
            stmt.close();
            conn.close();
        } 
        catch(SQLException se) {
            //Handle errors for JDBC
            se.printStackTrace();
        } 
        catch(Exception e) {
            //Handle errors for Class.forName
            e.printStackTrace();
        } 
        finally {
        
        }
   }
} 