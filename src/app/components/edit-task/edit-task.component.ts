import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent {
  @Input() task: Task;
  @Output() onUpdateDayClick: EventEmitter<Task> = new EventEmitter();
  editDayInput: string = '';

  ngOnInit() {
    this.editDayInput = this.task.day;
  }

  saveEdit(task: Task) {
    task.day = this.editDayInput;
    this.onUpdateDayClick.emit(task);
  }
}
