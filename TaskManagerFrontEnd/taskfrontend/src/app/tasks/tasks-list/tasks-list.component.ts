import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {


    tasks: Task[] =[];

    constructor( private taskService:TaskService) { }

    ngOnInit() {
        return this.taskService.getTasks()
            .subscribe(
                (tasks: any[] )=>{
                    this.tasks = tasks;
                },
                (error)=>console.log(error)
            );
    }

    getDueDateLabel(task:Task){
        return task.complated ? 'label-success' : 'label-primary';
    }

    onTaskChange(event,task){
        console.log("Task has changed");
    }

}
