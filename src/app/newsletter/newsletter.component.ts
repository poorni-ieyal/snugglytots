import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isOpen: boolean = false;

  ngOnInit() {
    const isSubmitted = localStorage.getItem('newsletterSubmitted');
    if (!isSubmitted) {
      this.isOpen = true;
    }
  }

  sendToWhatsApp() {
    const whatsappNumber = '6584141220';
    const message = `Name: ${this.name}%0AEmail: ${this.email}%0AMessage: ${
      this.message || 'No message provided'
    }`;
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
    this.close();
    localStorage.setItem('newsletterSubmitted', 'true');
  }

  close() {
    this.isOpen = false;
  }
}
