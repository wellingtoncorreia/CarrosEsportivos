import { Component } from '@angular/core';
import { CardCarComponent } from "./components/card-car/card-car.component";
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TestemunhosComponent } from "./testemunhos/testemunhos.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardCarComponent, HeroComponent, NavbarComponent, TestemunhosComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  

 
}
