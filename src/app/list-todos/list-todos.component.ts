import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent {

  todos = [
    { id: 1, description: 'learn to code' },
    { id: 2, description: 'learn to dance' },
    { id: 3, description: 'learn to drive' },
  ]

}
