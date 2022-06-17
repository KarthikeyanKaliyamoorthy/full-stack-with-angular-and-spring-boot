import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id:number,
    public desc:string,
    public name:string,
    public targetDate:Date,
    public done:boolean
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos:Todo[]
  message:string;
  // todos= [
  //   new Todo(1,'Learn Angular', new Date, false),
  //   new Todo(2,'Learn Spring boot', new Date, false),
  //   new Todo(3,'Learn micro services', new Date, false),
  // ]
  // todo ={
  //   id:'1',
  //   description:'Learn Angular'
  // }
  // todos=[
  //   {
  //     id:'1',
  //     description:'Learn Angular'
  //   },
  //   {
  //     id:'2',
  //     description:'Learn Spring boot'
  //   },
  //   {
  //     id:'3',
  //     description:'Learn micro services'
  //   }

  // ]
  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.refereshTodos();
  }

  private refereshTodos() {
    this.todoService.retriveAllTodosService('karthik').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id:number){
    
    console.log(`delete of ${id} Todo`);
    this.todoService.deleteTodoById('karthik',id).subscribe(
      response => {
        console.log(response);
        this.message= `Todo ${id} deleted successfully!`
        this.refereshTodos();
      }
    );
  }

  updateTodo(id:number){
    
    console.log(`update of ${id} Todo`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){

    console.log(`Add todo`);
    this.router.navigate(['todos',-1])
  }
}
