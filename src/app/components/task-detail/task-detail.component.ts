import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  @Input() id: string = '';
  pathname: string = '';
  loading: boolean = true;

  task: Task;

  constructor(
    private location: Location,
    private taskService: TaskService //private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //const id = this.route.snapshot.paramMap.get('id') as string;
    this.taskService.getTask(this.id).subscribe((task) => {
      this.task = task;
      this.loading = false;
    });
    this.pathname = this.location.path();
  }

  goBack() {
    this.location.back();
  }
}
