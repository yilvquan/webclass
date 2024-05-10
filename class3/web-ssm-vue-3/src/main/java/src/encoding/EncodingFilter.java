package src.encoding;


import javax.servlet.*;
import java.io.IOException;

public class EncodingFilter implements Filter {


    public void init(FilterConfig filterConfig) throws ServletException{
        System.out.println("Servlet初始化");
    }
    public void doFilter(ServletRequest request, ServletResponse arg1,
                         FilterChain chain) throws IOException, ServletException {
        request.setCharacterEncoding("utf-8");
        chain.doFilter(request, arg1);

    }
    public void destroy() {
        // TODO Auto-generated method stub

    }



}
