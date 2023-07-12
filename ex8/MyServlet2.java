import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class MyServlet2 extends HttpServlet{ 
    // JDBC driver name and database URL
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
    static final String DB_URL="jdbc:mysql://localhost:3306/countries";

    //  Database credentials 
    static final String USER = "root";
    static final String PASS = "ssn@123";
    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        // Set response content type
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
            
        String country = request.getParameter("country");  
     
        try {
            // Register JDBC driver
            Class.forName(JDBC_DRIVER);
            // Open a connection
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            
            // Execute SQL query
            Statement stmt = conn.createStatement();
            String sql = "SELECT * FROM countries WHERE country LIKE '" + country + "%'";
            ResultSet rs = stmt.executeQuery(sql);

            if(rs.next())
            {  
                rs.previous();
                while(rs.next())
                    out.print("<option value = '" + rs.getString("country") + "'></option>");
            }
            else 
                out.print("<option value = 'No Country Found!'></option>");
            
            // Clean-up environment
            rs.close();
            stmt.close();
            conn.close();
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
    }
}    