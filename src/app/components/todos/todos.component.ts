import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];


  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First-todo',
        complete: false
      },
      {
        content: 'Second-todo',
        complete: true
      }
    ]
  }

}
