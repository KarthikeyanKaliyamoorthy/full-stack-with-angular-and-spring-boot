package com.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

	private static List<Todo> todos = new ArrayList<Todo>();
	private static Long counter = 0L;

	static {
		todos.add(new Todo(++counter, "karthik", "Learn angular 1", new Date(), false));
		todos.add(new Todo(++counter, "karthik", "Learn micro service", new Date(), false));
		todos.add(new Todo(++counter, "karthik", "Learn spring boot", new Date(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo deleteById(long id) {

		Todo todo = findById(id);

		if (todo == null)
			return null;

		if (todos.remove(todo))
			return todo;

		return null;
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id)
				return todo;
		}
		return null;
	}

	public Todo save(Todo todo) {

		if (todo.getId() == -1 || todo.getId() == 0 ) {
			todo.setId(++counter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
}
