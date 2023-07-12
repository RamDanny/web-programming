import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class MyServlet extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String sal = request.getParameter("salch");
		String name = request.getParameter("name");
		String uname = request.getParameter("uname");
		String pwd = request.getParameter("pword");
		String email = request.getParameter("email");
		String dob = request.getParameter("dob");
		String img = request.getParameter("image");
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		
		pw.println("<table border=1>");

		pw.println("<tr>");
		pw.println("<th>Salutation</th>");
		pw.println("<td>");
		pw.println(sal);
		pw.println("</td>");
		pw.println("</tr>");
		
		pw.println("<tr>");
		pw.println("<th>Name</th>");
		pw.println("<td>");
		pw.println(name);
		pw.println("</td>");
		pw.println("</tr>");

		pw.println("<tr>");
		pw.println("<th>Username</th>");
		pw.println("<td>");
		pw.println(uname);
		pw.println("</td>");
		pw.println("</tr>");

		pw.println("<tr>");
		pw.println("<th>Password</th>");
		pw.println("<td>");
		pw.println(pwd);
		pw.println("</td>");
		pw.println("</tr>");

		pw.println("<tr>");
		pw.println("<th>Email</th>");
		pw.println("<td>");
		pw.println(email);
		pw.println("</td>");
		pw.println("</tr>");

		pw.println("<tr>");
		pw.println("<th>DOB</th>");
		pw.println("<td>");
		pw.println(dob);
		pw.println("</td>");
		pw.println("</tr>");

		pw.println("<tr>");
		pw.println("<th>Image</th>");
		pw.println("<td>");
		pw.println(img);
		pw.println("</td>");
		pw.println("</tr>");

		pw.println("</table>");
		pw.close();
	}
}