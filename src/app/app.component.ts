import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CommunicationService } from './shared/services/communication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: Boolean = true;

  constructor(private route:Router,private Communication:CommunicationService){
    this.route.events.subscribe((event:any)=>{
      if(event instanceof NavigationStart ){
        if(event.url == '/login') this.title = false;
        else this.title = true;
      }
    })
  }
}
