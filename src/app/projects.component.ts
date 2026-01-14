
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = { title: string; description: string; tags: string[]; link?: string };

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects: Project[] = [
    { title: 'Portfolio Site', description: 'This very portfolio built with Angular and Bootstrap.', tags: ['Angular', 'Bootstrap'], link: '#' },
    { title: 'Task Manager', description: 'A small task manager app with local storage.', tags: ['Typescript', 'LocalStorage'], link: '#' },
  ];
}
