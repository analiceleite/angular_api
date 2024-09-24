import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['../../font.css'],
})
export class HomeComponent {

}
