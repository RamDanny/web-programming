import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class MyServlet2 extends HttpServlet {
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
    static final String DB_URL="jdbc:mysql://localhost:3306/patient_details";

    static final String USER = "root";
    static final String PASS = "mysql";

    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        out.println(
            "<html>\n" +
            "<head></head>\n" +
            "<body>\n" +
            "<h1>Select Records</h1>\n");
        try {
            // Register JDBC driver
            Class.forName(JDBC_DRIVER);

            // Open a connection
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            
            // Execute SQL query
            Statement stmt = conn.createStatement();
            String sql; 
            sql = "SELECT * FROM patients";
            ResultSet rs = stmt.executeQuery(sql);

            out.print("<table border='2px'>");
            out.print("<tr>");
            out.print("<th>Name</th><th>Age</th><th>ID</th><th>Gender</th><th>Address</th>");
            out.print("<th>Marital Status</th><th>Date of Visit</th>");
            out.print("<tr>");

            // Extract data from result set
            while (rs.next()) {
                //Retrieve by column name
                String name = rs.getString("name");
                int age = rs.getInt("age");
                String id = rs.getString("id");
                String gender = rs.getString("gender");
                String address = rs.getString("address");
                String marital = rs.getString("marital");
                String dov = rs.getString("dateofvisit");

                //Display values
                out.print("<tr>");
                out.print(String.format("<td>%s</td><td>%d</td><td>%s</td><td>%s</td><td>%s</td>", name, age, id, gender, address));
                out.print(String.format("<td>%s</td><td>%s</td>", marital, dov));
                out.print("<tr>");
            }
            out.print("</table>");
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