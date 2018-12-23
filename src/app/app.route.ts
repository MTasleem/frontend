import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'top', component: TopComponent },
  { path: 'bottom', component: BottomComponent },
  { path: 'left', component: LeftComponent },
  { path: 'right', component: RightComponent },
  { path: '**', component: PagenotfoundComponent }
];
