import { NgModule,Component } from '@angular/core';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css']
})
export class HomeLandingComponent {
  Email: string = "Tap your Email please...";
  Content: string = "Send us what you really want to say...";
  sendToMail() {
    alert(' your email is sent ');
  }
  EmptyEmail() {
    this.Email = "";
   
  }
  EmptyContent() {
    
    this.Content = "";
  }
}
