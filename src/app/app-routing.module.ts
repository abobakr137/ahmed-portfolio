import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home.component';
import { ProjectsPageComponent } from './pages/projects.component';
import { SkillsPageComponent } from './pages/skills.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'skills', component: SkillsPageComponent },

  { path: '**', redirectTo: '' } // For 404 fallback
];
