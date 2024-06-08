import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommunicationService } from '../../shared/services/communication.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { TeamComponent } from '../../components/team/team.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isHeaderVisible:boolean = true;
  constructor(private communication:CommunicationService,private route:Router,private modal:NgbModal){
  }
  @HostListener('window:scroll', ['$event']) 
  toggleScrolled(event:any) {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader?.classList.contains('scroll-up-sticky') && !selectHeader?.classList.contains('sticky-top') && !selectHeader?.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody?.classList.add('scrolled') : selectBody?.classList.remove('scrolled');
  }

  onOpenAbout(){
    this.modal.open(AboutComponent,{backdrop:false,centered:true,keyboard:true,fullscreen:false,animation:true,size:'xl'});
  }

  onOpenServices(){
    this.modal.open(ServicesComponent,{backdrop:false,centered:true,keyboard:true,fullscreen:false,animation:true,size:'xl'});
  }

  onOpenPortfolio(){
    this.modal.open(PortfolioComponent,{backdrop:false,centered:true,keyboard:true,fullscreen:false,animation:true,size:'xl'});
  }

  onOpenPricing(){
    this.modal.open(PricingComponent,{backdrop:false,centered:true,keyboard:true,fullscreen:false,animation:true,size:'xl'});
  }

  onOpenTeam(){
    this.modal.open(TeamComponent,{backdrop:false,centered:true,keyboard:true,fullscreen:false,animation:true,size:'xl'});
  }

  onOpenContact(){
    this.modal.open(ContactComponent,{backdrop:false,centered:true,keyboard:true,fullscreen:false,animation:true,size:'xl'})
  }
}
