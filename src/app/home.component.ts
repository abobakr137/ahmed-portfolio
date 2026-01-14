import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private readonly navbarHeight = 72; // adjust if navbar height changes

  /** Smooth scroll to a section id, accounting for fixed navbar height */
  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const top = el.offsetTop - this.navbarHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
