import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path:'',component:MainComponent,pathMatch:'full',title:'Coding Expert'},
    {path:'**',component:ErrorComponent,title:'Coding Expert'},
];
