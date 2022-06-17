package com.rest.webservices.restfulwebservices.hello;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

	@GetMapping(path = "/hello")
	public String hello() {
		return "hello rest";
	}
	
	@GetMapping(path = "/hello-bean")
	public HelloBean helloBean() {
		return new HelloBean("hello rest bean");
	}
	
	@GetMapping(path = "/hello/{name}")
	public HelloBean helloBean(@PathVariable String name) {
		return new HelloBean("hello rest bean");
		//throw new RuntimeException("Error occured, please contact support ***@***");
	}
}
