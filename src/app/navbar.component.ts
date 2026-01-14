import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() currentSection: string = 'home';
  @Output() navigate = new EventEmitter<string>();

  go(section: string) {
    this.navigate.emit(section);
  }
}
