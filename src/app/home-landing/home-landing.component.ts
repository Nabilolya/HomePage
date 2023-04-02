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
  email: string = '';
  messageCustomer: String = '';


  Email: string = "Tap your Email please...";
  Content: string = "Send us what you really want to say...";
  showToast() {
    let box = document.getElementById('snackbar');
    box?.classList.add('show');
    setTimeout(function(){  box?.classList.remove('show'); }, 3000);
  }
  
  sendToMail() {
    this.data.emailSender = this.email;
    this.data.name = this.name;
    this.data.message = this.message;
    if (this.data.message) {
      this.apicall.sendMail(this.data).subscribe((result) => {
        console.log(result);
        this.messageCustomer = "Ihre Nachricht wird gesendet, danke";
        this.showToast();
      })
    } else {
      this.messageCustomer = "Bitte geben Sie alle Wasserfälle ein ..";
      this.showToast();
    }
  
  }

  EmptyEmail() {
    this.Email = "";
   
  }
  EmptyContent() {
    
    this.Content = "";
  }
}
