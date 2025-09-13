import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ScrollService } from '../../model/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], 
  providers: [ScrollService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private scrollService: ScrollService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLinkClick(event: Event, targetId: string): void {
    event.preventDefault();
    this.scrollService.scrollTo(targetId);

    // Fecha o menu se estiver aberto (importante para mobile)
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }
}