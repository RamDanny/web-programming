import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class MyServlet3 extends HttpServlet {
    // logout servlet
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
        session.invalidate();

        out.println("<h3 style='text-align:center;'>Successfully logged out!</h3><br>");
        out.print("<a href='login.html' class='button'>Login Page</a>");
        out.println("</body></html>");
    }
} 