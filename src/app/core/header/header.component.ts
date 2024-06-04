import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommunicationService } from '../../shared/services/communication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isHeaderVisible:boolean = true;
  constructor(private communication:CommunicationService,private route:Router){
    // this.isHeaderVisible = this.communication.getHeaderValue();
    // this.route.events.subscribe((event:any)=>{
    //   if(event instanceof NavigationEnd){
    //     if(event.url == '/'){
    //       this.isHeaderVisible = true;
    //     }else{
    //       this.isHeaderVisible = false;  
    //     }
    //   }
    // });
    console.log("Header : ",this.isHeaderVisible);
  }
  @HostListener('window:scroll', ['$event']) 
  toggleScrolled(event:any) {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader?.classList.contains('scroll-up-sticky') && !selectHeader?.classList.contains('sticky-top') && !selectHeader?.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody?.classList.add('scrolled') : selectBody?.classList.remove('scrolled');
  }
}
