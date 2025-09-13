import { Component } from '@angular/core';
import { ScrollService } from '../../model/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  providers:[ScrollService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
// Injete o serviço no construtor
  constructor(private scrollService: ScrollService) {} 
 
  // Método que será chamado pelo clique
  onLinkClick(event: Event, targetId: string): void {
    // Previne o comportamento padrão de "salto" do link
    event.preventDefault(); 
    
    // Chama o serviço para fazer a rolagem suave
    this.scrollService.scrollTo(targetId);
  }
}
