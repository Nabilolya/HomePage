import { NgModule,Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apicall } from './services/apicall';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css']
})
export class HomeLandingComponent {
  constructor(private apicall : apicall) {
    
  }
  data = {
    emailSender: 'nabilbouhassounolya@gmail.com',
    emailReciever: 'nabilbouhassounolya@gmail.com',
    message: 'message',
    name:''
  }
  message: string = '';
  name: string = '';
  email:string = '';

  Email: string = "Tap your Email please...";
  Content: string = "Send us what you really want to say...";
  sendToMail() {
    alert(' your email is sent ');
    alert(this.name+' '+this.email+' '+this.message);
   
    //this.data.emailSender = "samahbouhassoune@gmail.com";
    this.data.emailReciever = this.email;
    this.data.name = this.name;
    this.data.message = this.message;
    alert(JSON.stringify(this.data));
    this.apicall.sendMail(this.data).subscribe((result) => {
      console.log(result);
    })
  }

  EmptyEmail() {
    this.Email = "";
   
  }
  EmptyContent() {
    
    this.Content = "";
  }
}
