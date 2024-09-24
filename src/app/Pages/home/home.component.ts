import { Component,OnInit, OnDestroy  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['../../font.css'],
})

export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    { image: 'images/carrosel_03.png', alt: 'Slide 1' },
    { image: 'images/carrosel_02.jpg', alt: 'Slide 2' },
    { image: 'images/carrosel_01.png', alt: 'Slide 3' }
  ];
  currentIndex = 0;
  interval: any; 

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.next();
    }, 3000); 
  }

  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}

