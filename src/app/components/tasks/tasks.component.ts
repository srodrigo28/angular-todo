import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Tarefa } from '../../Models/Tarefa';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent implements OnInit {
  tarefaTitle : string = 'teste 2025';
  tarefas: Tarefa[] = [];

  constructor( private taskService: TasksService){}

  ngOnInit(): void {

    this.taskService.getTasks().subscribe( (dado) => {
      this.tarefas = dado;
      console.log(dado);
    } );
  }

  deleteTask(tarefa: Tarefa){
    this.taskService.deleteTask(tarefa).subscribe();
    window.location.reload();
  }
}







