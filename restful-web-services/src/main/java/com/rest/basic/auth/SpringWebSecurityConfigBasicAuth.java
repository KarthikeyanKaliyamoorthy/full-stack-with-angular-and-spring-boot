package com.rest.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringWebSecurityConfigBasicAuth extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http.csrf().disable()
		.authorizeRequests((requests) -> requests.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
				.anyRequest().authenticated());
		
		//http.formLogin();
		http.httpBasic();
	}

}
