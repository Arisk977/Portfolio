import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SingleProjectComponent } from './single-project/single-project.component';

export const routes: Routes = [
     {path: '', component: MainComponent},
     { path: 'singelProject', component: SingleProjectComponent},
];
