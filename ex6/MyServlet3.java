import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import java.util.*;
import java.sql.*;

public class MyServlet3 extends HttpServlet {
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
    static final String DB_URL="jdbc:mysql://localhost:3306/patient_details";

    static final String USER = "root";
    static final String PASS = "mysql";

    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
    {
        response.setContentType("text/html"); //setting the content type
        PrintWriter out = response.getWriter(); //get the stream to write the data
        
        String address = request.getParameter("address");
        String dov = request.getParameter("dateofvisit").toString();
        String id = request.getParameter("id");

        try {
            // Register JDBC driver
            Class.forName(JDBC_DRIVER);

            // Open a connection
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);

            if(!address.isEmpty() && !dov.isEmpty()){
                PreparedStatement stmt = conn.prepareStatement("UPDATE patients SET address=?, dateofvisit=? WHERE id=?");
                stmt.setInt(3,Integer.valueOf(id));
                stmt.setString(1, address);
                stmt.setDate(2,java.sql.Date.valueOf(dov));
                stmt.executeUpdate();
                stmt.close();
            }
            else if(!address.isEmpty()){
                PreparedStatement stmt = conn.prepareStatement("UPDATE patients SET address=? WHERE id=?");
                stmt.setInt(2, Integer.valueOf(id));
                stmt.setString(1, address);
                stmt.executeUpdate();
                stmt.close();
            }
            else if(!dov.isEmpty()){
                PreparedStatement stmt = conn.prepareStatement("UPDATE patients SET dateofvisit=? WHERE id=?");
                stmt.setInt(2,Integer.valueOf(id));
                stmt.setDate(1,java.sql.Date.valueOf(dov));
                stmt.executeUpdate();
                stmt.close();
            }
            else{
                throw new Error("Empty form!");
            }

            conn.close();
            out.print("<h3>Updated!</h3><br>");
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