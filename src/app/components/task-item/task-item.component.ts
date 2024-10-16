import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../Models/Tarefa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tarefa!:Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();

  onDelete(tarefa: Tarefa){
    this.onDeleteTask.emit(tarefa);
  }
}
