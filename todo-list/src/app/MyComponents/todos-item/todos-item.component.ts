import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent {
  @Input()
  todo!: Todo;
  
  @Input() i!:number;

  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter;
  @Output() todoCheckbox:EventEmitter<Todo>=new EventEmitter;
  
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo :Todo){
    this.todoCheckbox.emit(todo);
  }

}
