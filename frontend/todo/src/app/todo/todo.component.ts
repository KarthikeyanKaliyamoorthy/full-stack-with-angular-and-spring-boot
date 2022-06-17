import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTHENTICATED_USER } from '../app.constants';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '',sessionStorage.getItem(AUTHENTICATED_USER), new Date, false);
    if (this.id != -1) {
      this.todoService.retriveTodoById('karthik', this.id).subscribe(
        data => {
          this.todo = data
        }
      )
    }
  }

  saveTodo() {
    if (this.id===-1) {
      //Create todd
      console.log('target date' + this.todo.targetDate);
      this.todo.
      this.todoService.addTodo('karthik',this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    } else{
      console.log('target date' + this.todo.targetDate);
      this.todoService.updateTodo('karthik', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )  
    }    
  }

}
