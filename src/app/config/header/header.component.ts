import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  ngOnInit() {}
  scrollToFn(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollTop() {
    window.scroll(0, 0);
  }

  scrollToCategories(id: string) {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // setTimeout(() => {
    //   this.scrollService.scrollToElement(id);
    // }, 10);
    console.log(element); // Short timeout (adjust if needed)
  }
}
