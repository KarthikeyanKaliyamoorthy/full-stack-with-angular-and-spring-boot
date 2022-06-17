import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {
  
  constructor(private http:HttpClient) { }

  retriveAllTodosService(username){
    //console.log('executing rest web serive')
    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodoById(name: string, id: number) {    
    return this.http.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
  }

  retriveTodoById(name: string, id: number) {    
    return this.http.get<Todo>(`${JPA_API_URL}/users/${name}/todos/${id}`);
  }

  updateTodo(name: string, id: number,todo: Todo) {  
    console.log('data serice target date' + todo.targetDate);  
    return this.http.put(`${JPA_API_URL}/users/${name}/todos/${id}`,todo);
  }

  addTodo(name: string, todo: Todo) {    
    return this.http.post(`${JPA_API_URL}/users/${name}/todos`,todo);
  }

}
