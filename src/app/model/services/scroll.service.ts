// src/app/services/scroll.service.ts

import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() {
    // Registra o plugin ScrollTo para que o GSAP possa usá-lo
    gsap.registerPlugin(ScrollToPlugin);
  }

  /**
   * Anima a rolagem da página até um alvo específico.
   * @param target - O seletor do ID do alvo (ex: '#contato').
   * @param duration - A duração da animação em segundos.
   */
  scrollTo(target: string, duration: number = 1.5): void {
    gsap.to(window, {
      duration: duration,       // Duração de 1.5 segundos (mais lento)
      scrollTo: target,         // O alvo da rolagem
      ease: 'power2.inOut', // Efeito de aceleração e desaceleração suave
    });
  }
}