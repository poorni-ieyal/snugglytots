import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './config/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './config/footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NewsletterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'snugglytots';

  showNewsletter = false;

  ngOnInit() {
    // Check if the user has already submitted the form
    const isSubmitted = localStorage.getItem('newsletterSubmitted');
    this.showNewsletter = !isSubmitted; // Show the form only if not submitted
  }

  closeNewsletter() {
    this.showNewsletter = false;
  }

  handleFormSubmit() {
    localStorage.setItem('newsletterSubmitted', 'true');
    this.showNewsletter = false;
  }
}
