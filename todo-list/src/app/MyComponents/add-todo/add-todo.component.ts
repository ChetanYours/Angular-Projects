import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  @Output() addTodo : EventEmitter<Todo>=new EventEmitter();

  title!:string;
  desc!:string;

onSubmit() {
  // console.log(this.title);

  const todo= {
    sno:23,
    title : this.title,
    desc : this.desc,
    active : true 
  }
  this.addTodo.emit(todo);
}

}
