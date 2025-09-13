import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  // Lista de cores disponíveis para o carro
  availableColors = [
    { name: 'red', hex: '#d32f2f' },
    { name: 'silver', hex: '#e0e0e0' },
    { name: 'gray', hex: '#757575' },
    { name: 'black', hex: '#212121' }
  ];

  // A cor atualmente selecionada, começando pelo vermelho
  selectedColor = this.availableColors[0];

  // Imagem principal do carro, inicializada conforme a cor selecionada
  carImageUrl = `/sports-car-${this.selectedColor.name}.png`;

  /**
   * Atualiza a cor selecionada quando o usuário clica em uma opção.
   * @param color O objeto de cor que foi clicado.
   */
  selectColor(color: { name: string, hex: string }): void {
    this.selectedColor = color;
    // Atualiza a imagem do carro conforme a cor selecionada
    this.carImageUrl = `/sports-car-${color.name}.png`;
  }
}
