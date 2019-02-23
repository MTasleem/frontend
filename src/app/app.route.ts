import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PagenotfoundComponent }
];
