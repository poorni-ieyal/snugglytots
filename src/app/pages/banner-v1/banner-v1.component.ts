import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-banner-v1',
  standalone: true,
  imports: [],
  templateUrl: './banner-v1.component.html',
  styleUrls: ['./banner-v1.component.css'],
})
export class BannerV1Component implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const heroSection = this.renderer.selectRootElement('.hero', true);
    for (let i = 0; i < 10; i++) {
      const bubble = this.renderer.createElement('div');
      this.renderer.addClass(bubble, 'bubble');
      this.renderer.setStyle(bubble, 'left', `${Math.random() * 100}%`);
      this.renderer.setStyle(
        bubble,
        'animationDuration',
        `${5 + Math.random() * 5}s`
      );
      this.renderer.setStyle(bubble, 'animationDelay', `${Math.random() * 5}s`);
      this.renderer.appendChild(heroSection, bubble);
    }
  }
}
