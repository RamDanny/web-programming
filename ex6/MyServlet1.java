import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import java.util.*;
import java.sql.*;

public class MyServlet1 extends HttpServlet {
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
    static final String DB_URL="jdbc:mysql://localhost:3306/patient_details";

    static final String USER = "root";
    static final String PASS = "mysql";

    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
    {
        response.setContentType("text/html"); //setting the content type
        PrintWriter out = response.getWriter(); //get the stream to write the data
        
        String name = request.getParameter("name");
        int age = Integer.parseInt(request.getParameter("age"));
        String id = request.getParameter("id");
        String gender = request.getParameter("gender");
        String address = request.getParameter("address");
        String marital = request.getParameter("marital");

        try {
            // Register JDBC driver
            Class.forName(JDBC_DRIVER);

            // Open a connection
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);

            PreparedStatement stmt = conn.prepareStatement("INSERT INTO patients VALUES(?,?,?,?,?,?,?)");
            stmt.setString(1, name);
            stmt.setInt(2, age);
            stmt.setString(3, id);
            stmt.setString(4, gender);
            stmt.setString(5, address);
            stmt.setString(6, marital);
            stmt.setDate(7, java.sql.Date.valueOf(request.getParameter("dateofvisit")));

            stmt.executeUpdate();

            stmt.close();
            conn.close();
            out.print("<h3>Inserted!</h3><br>");
            // redirect to index page after completion
            response.setStatus(302);
            response.setHeader("Location", "index.html");
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
        out.close(); //closing the stream
    }
}