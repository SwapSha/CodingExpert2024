import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:'',component:MainComponent,pathMatch:'full',title:'Coding Expert'},
    {path:'about',component:AboutComponent,title:'Coding Expert'},
    {path:'service',component:ServicesComponent,title:'Coding Expert'},
    {path:'portfolio',component:PortfolioComponent,title:'Coding Expert'},
    {path:'pricing',component:PricingComponent,title:'Coding Expert'},
    {path:'team',component:TeamComponent,title:'Coding Expert'},
    {path:'contact',component:ContactComponent,title:'Coding Expert'},
    {path:'**',component:ErrorComponent,title:'Coding Expert'},
];
