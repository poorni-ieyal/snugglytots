import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css'],
})
export class SpecialComponent {
  specials: any = [
    {
      icon: '../../../assets/images/icons/Eco Friendly fabric.svg',
      heading: 'Eczema Friendly Fabrics',
      subheading: 'Tencel, Bamboo and Wool.',
      alt: 'Eczema-Friendly Fabrics',
    },
    {
      icon: '../../../assets/images/icons/Soft SKin.svg',
      heading: 'Designed for Sensitive Skin',
      subheading:
        'Seamless Flatlock Stitching, Tag-Free Designs,Silky-Smooth Texture.',
      alt: 'No harsh chemicals, no irritants.',
    },
    {
      icon: '../../../assets/images/icons/Affordable High Quality.svg',
      heading: 'Affordable & High-Quality',
      subheading: 'Premium comfort without the premium price.',
      alt: 'Affordable & High-Quality',
    },
    {
      icon: '../../../assets/images/icons/Parent Approved.svg',
      heading: 'Parent-Approved',
      subheading:
        'Created by a parent who understands the struggles of baby eczema.',
      alt: 'Parent-Approved',
    },
  ];
}
