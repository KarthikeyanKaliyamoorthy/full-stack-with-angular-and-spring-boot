package com.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {

	@Autowired
	private TodoHardcodedService todoService;

	@GetMapping("/users/{name}/todos")
	public List<Todo> getAllTodos(@PathVariable String name) {

		return todoService.findAll();
	}

	@GetMapping("/users/{name}/todos/{id}")
	public Todo getTodoById(@PathVariable String name, @PathVariable long id) {

		return todoService.findById(id);
	}

	@DeleteMapping("/users/{name}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable int id) {

		Todo todo = todoService.deleteById(id);

		if (todo != null)
			return ResponseEntity.noContent().build();

		return ResponseEntity.notFound().build();
	}

	@PutMapping("/users/{name}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String name, @PathVariable int id, @RequestBody Todo todo) {
		System.out.println("target date "+todo.getTargetDate());
		Todo save = todoService.save(todo);
		return ResponseEntity.ok(save);
	}

	@PostMapping("/users/{name}/todos")
	public ResponseEntity<Void> saveTodo(@PathVariable String name, @RequestBody Todo todo) {

		Todo save = todoService.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(save.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
