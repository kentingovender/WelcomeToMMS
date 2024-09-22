import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  userName: string = '';

  showWelcomeMessage() {
    if (this.userName) {
      alert(`Welcome to MMS.`);
      this.userName = '';
    } else {
      alert('Please enter your name.');
    }
  }
}
