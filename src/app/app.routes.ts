import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LegalComponent } from './legal/legal.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'main', component: MainPageComponent},   
    { path: 'legal', component: LegalComponent }
];
