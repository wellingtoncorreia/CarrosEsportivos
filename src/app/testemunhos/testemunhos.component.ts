import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Importa o modelo e os dados
import { TESTEMUNHOS } from '../model/datas/dataTestemunhos';
// Importa os ícones que serão usados
import { LucideAngularModule } from 'lucide-angular';

// Importa e registra os elementos do Swiper
import { register } from 'swiper/element/bundle';
import { Itestemunhos } from '../model/interfaces/itestemunhos';
register();



@Component({
  selector: 'app-testemunhos',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './testemunhos.component.html',
  styleUrl: './testemunhos.component.scss',
  // Permite o uso de <swiper-container> e <swiper-slide> no template
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestemunhosComponent {
  testemunhos: Itestemunhos[] = TESTEMUNHOS;

  getStars(rating: number): any[] {
    return Array(rating);
  }

}
