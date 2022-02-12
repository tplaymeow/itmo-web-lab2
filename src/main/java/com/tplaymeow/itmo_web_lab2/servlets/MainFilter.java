package com.tplaymeow.itmo_web_lab2.servlets;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Objects;

@WebFilter("/*")
public class MainFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest,
                         ServletResponse servletResponse,
                         FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;

        if(httpServletRequest.getRequestURI().matches(".*(css|jpg|png|gif|js)")){
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }
        String servletName = httpServletRequest.getHttpServletMapping().getServletName();
        if (!Objects.equals(servletName, "ControllerServlet")) {
            servletRequest.getRequestDispatcher("/error.jsp").forward(servletRequest, servletResponse);
            return;
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }
}
