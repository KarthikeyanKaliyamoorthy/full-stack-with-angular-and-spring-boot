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
public class TodoJPAResource {

	@Autowired
	private TodoHardcodedService todoService;
	
	@Autowired
	private TodoJPARepository todoJPARepository;

	@GetMapping("/jpa/users/{name}/todos")
	public List<Todo> getAllTodos(@PathVariable String name) {
		
		return todoJPARepository.findByName(name);
		//return todoService.findAll();
	}

	@GetMapping("/jpa/users/{name}/todos/{id}")
	public Todo getTodoById(@PathVariable String name, @PathVariable long id) {

		return todoJPARepository.findById(id).get();
		//return todoService.findById(id);
	}

	@DeleteMapping("/jpa/users/{name}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable long id) {

		
		Todo todo = todoJPARepository.findById(id).get();
		todoJPARepository.deleteById(id);
		if (todo != null)
			return ResponseEntity.noContent().build();

		return ResponseEntity.notFound().build();
	}

	@PutMapping("/jpa/users/{name}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String name, @PathVariable int id, @RequestBody Todo todo) {
		
		System.out.println("target date "+todo.getTargetDate());		
		Todo save = todoJPARepository.save(todo);
		return ResponseEntity.ok(save);
	}

	@PostMapping("/jpa/users/{name}/todos")
	public ResponseEntity<Void> saveTodo(@PathVariable String name, @RequestBody Todo todo) {

		Todo save = todoJPARepository.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(save.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
