import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { CountDownComponent } from '../count-down/count-down.component';
import { BannerV1Component } from '../banner-v1/banner-v1.component';
import { SpecialComponent } from '../special/special.component';
import { CollectionsComponent } from '../collections/collections.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CtaComponent } from '../cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    CountDownComponent,
    BannerV1Component,
    SpecialComponent,
    CollectionsComponent,
    TestimonialsComponent,
    CtaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
