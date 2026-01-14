import { Component, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';
import { SkillsComponent } from './skills.component';
import { ContactComponent } from './contact.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar 
      [currentSection]="currentSection"
      (navigate)="scrollTo($event)">
    </app-navbar>

    <main>
      <section id="home" class="min-vh-100 py-5">
        <div class="container">
          <app-home></app-home>
        </div>
      </section>

      <section id="projects" class="py-5">
        <div class="container">
          <app-projects></app-projects>
        </div>
      </section>

      <section id="skills" class="py-5">
        <div class="container">
          <app-skills></app-skills>
        </div>
      </section>

      <section id="contact" class="py-5">
        <div class="container">
          <app-contact></app-contact>
        </div>
      </section>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    :host { display: block; }
    section { scroll-margin-top: 80px; }
  `]
})
export class AppComponent implements AfterViewInit, OnDestroy {

  currentSection = 'home';
  private readonly navbarOffset = 80;

  private observer: IntersectionObserver | null = null;

  constructor(private ngZone: NgZone) {}

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - this.navbarOffset;

    window.scrollTo({ top, behavior: 'smooth' });
    this.currentSection = id;
  }

  ngAfterViewInit(): void {

  /* -------------------------------
    1) Scroll Section Highlight Logic 
  ---------------------------------*/
  const sections = ['home', 'projects', 'skills', 'contact'];

  this.observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = (entry.target as HTMLElement).id;
        this.ngZone.run(() => (this.currentSection = id));
      }
    });
  }, {
    threshold: 0.3,
  });

  sections.forEach(sec => {
    const el = document.getElementById(sec);
    if (el && this.observer) this.observer.observe(el);
  });


  /* -------------------------------
    2) Reveal Animation on Scroll 
  ---------------------------------*/
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15
  });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

}

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
