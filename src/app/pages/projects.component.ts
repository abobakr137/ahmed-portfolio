import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = { title: string; description: string; tags: string[]; link?: string; image?: string };

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsPageComponent {
  projects: Project[] = [
    { title: 'Portfolio Site', description: 'This very portfolio built with Angular and Bootstrap.', tags: ['Angular', 'Bootstrap'], link: '#', image: '/assets/project1.png' },
    { title: 'Task Manager', description: 'A small task manager app with local storage.', tags: ['Typescript', 'LocalStorage'], link: '#', image: '/assets/project2.png' },
    { title: 'Performance Analyzer', description: 'Tool for analyzing and improving web performance.', tags: ['Performance'], link: '#', image: '/assets/project3.png' }
  ];
}
