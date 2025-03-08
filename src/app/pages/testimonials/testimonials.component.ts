import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  testimonials: any = [
    {
      mainImg: '../../../assets/images/mom.png',
      ratingImg: '../../../assets/images/rating.png',
      text: 'Finally, affordable eczema-friendly clothing for babies! Can’t wait to try SnugglyTots”',
      name: '– Mom-to-be, Clara',
    },
    {
      mainImg: '../../../assets/images/dad.png',
      ratingImg: '../../../assets/images/rating.png',
      text: 'My baby struggles with eczema. This brand is exactly what we’ve been waiting for!',
      name: '– Dad, Marcus',
    },
  ];
}
