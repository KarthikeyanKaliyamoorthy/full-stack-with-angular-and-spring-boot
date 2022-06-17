package com.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuthController {

	/*
	 * @GetMapping(path = "/hello") public String hello() { return "hello rest"; }
	 */
	
	@GetMapping(path = "/auth-bean")
	public AuthBean helloBean() {
		return new AuthBean("You are authenticated");
	}
	
	/*
	 * @GetMapping(path = "/hello/{name}") public HelloBean helloBean(@PathVariable
	 * String name) { throw new
	 * RuntimeException("Error occured, please contact support ***@***"); }
	 */
}
