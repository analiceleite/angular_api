import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './about.component.html',
  styleUrls: ['../../font.css'],
})
export class AboutComponent {

}
