package com.rest.webservices.restfulwebservices.hello;

public class HelloBean {
	
	private String message;

	public HelloBean(String message) {
		this.setMessage(message);
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloBean [message=" + message + "]";
	}
	
	
}
