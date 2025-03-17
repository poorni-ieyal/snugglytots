import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { Autoplay, SwiperOptions } from 'swiper';
import SwiperCore, { EffectCoverflow } from 'swiper';

SwiperCore.use([EffectCoverflow, Autoplay]);

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent {
  config: SwiperOptions = {
    speed: 3000,
    slidesPerView: 2,
    spaceBetween: 0,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    navigation: false,
    pagination: false,
    scrollbar: false,
    loop: true,

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: false,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      425: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1020: {
        slidesPerView: 2,
        spaceBetween: -200,
      },

      1440: {
        slidesPerView: 2,
        spaceBetween: -200,
      },
    },
  };

  meetups: Array<string> = [
    '../../../assets/images/BAMBOO - SPANDEX.png',
    '../../../assets/images/LUXE SLEEP SET WEBSITE.png',
    '../../../assets/images/BAMBOO SPANDEX.png',
    '../../../assets/images/SNUGGLY AVIATOR ROMPER WEBSITE.png',
    '../../../assets/images/TENCEL WOOL SPANDEX .png',
    '../../../assets/images/UNICORN WEBSITE.png',
    '../../../assets/images/SNUGGLYSHIELD WEBSITE.jpg',
  ];
}
