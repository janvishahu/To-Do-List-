import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-to-do-list',
  standalone: true, // ✅ Required for standalone components
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  title = 'To-Do-list';
  list: any[] = [];

  addTask(item: string) {
    if (item.trim().length === 0) return;
    this.list.push({ id: this.list.length, name: item });
    console.log(this.list);
  }

  removeTask(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }
}
