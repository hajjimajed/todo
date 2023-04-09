import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  todos?: Todo[]
  // todos = [
  //   new Todo(1, 'learn to code', false, new Date()),
  //   new Todo(2, 'be an expert', false, new Date()),
  // ]
  message !: string;


  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('majed').subscribe(
      Response => {
        this.todos = Response;
        console.log(Response)
      }
    )
  }

  deleteTodo(id: any) {
    this.todoService.deleteTodo('majed', id).subscribe(
      Response => {
        console.log(Response);
        this.message = `todo ${id} deleted`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: any) {
    console.log('updated')
    this.router.navigate(['todos', id])
  }

}
