import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import java.util.*;
import java.sql.*;

public class MyServlet4 extends HttpServlet {
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
    static final String DB_URL="jdbc:mysql://localhost:3306/patient_details";

    static final String USER = "root";
    static final String PASS = "mysql";

    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
    {
        response.setContentType("text/html"); //setting the content type
        PrintWriter out = response.getWriter(); //get the stream to write the data
        
        String id = request.getParameter("id");

        try {
            // Register JDBC driver
            Class.forName(JDBC_DRIVER);

            // Open a connection
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);

            if(!id.isEmpty()){
                PreparedStatement stmt = conn.prepareStatement("DELETE FROM patients WHERE id=?");
                stmt.setString(1, id);
                stmt.executeUpdate();
                stmt.close();
            }
            else{
                throw new Error("Empty form!");
            }

            conn.close();
            out.print("<h3>Deleted!</h3><br>");
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