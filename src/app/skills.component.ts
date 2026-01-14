import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'bi bi-code-slash', level: 90 },
        { name: 'TypeScript', icon: 'bi bi-filetype-tsx', level: 88 },
        { name: 'HTML5', icon: 'bi bi-filetype-html', level: 95 },
        { name: 'CSS3', icon: 'bi bi-filetype-css', level: 92 },
        { name: 'Bootstrap', icon: 'bi bi-bootstrap', level: 90 },
        { name: 'UI/UX', icon: 'bi bi-palette', level: 85 },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'bi bi-cpu', level: 70 },
        { name: 'Express', icon: 'bi bi-hdd-network', level: 68 },
        { name: 'MongoDB', icon: 'bi bi-database', level: 65 },
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: 'bi bi-git', level: 90 },
        { name: 'Jest', icon: 'bi bi-check2-circle', level: 75 },
        { name: 'Figma', icon: 'bi bi-easel', level: 80 },
        { name: 'Performance', icon: 'bi bi-speedometer2', level: 85 },
      ]
    }
  ];
}
