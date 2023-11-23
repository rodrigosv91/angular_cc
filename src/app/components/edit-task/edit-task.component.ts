import { Component, Input } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent {
  @Input() task: Task;
  editInputValue: string = '';

  ngOnInit() {
    this.editInputValue = this.task.day;
  }

  saveEdit() {}
}
