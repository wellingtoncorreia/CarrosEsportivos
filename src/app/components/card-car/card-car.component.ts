import { Component } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { CARS } from '../../model/datas/dataCar';
import { Car } from '../../model/interfaces/Car';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card-car',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card-car.component.html',
  styleUrl: './card-car.component.scss'
})
export class CardCarComponent {
  cars: Car[] = CARS;

  /**
   * Função auxiliar para obter o valor de uma propriedade específica de um carro.
   * @param car - O objeto do carro.
   * @param label - O rótulo da propriedade a ser encontrada (ex: 'Ano', 'Assentos').
   * @returns O valor da propriedade ou 'N/A' se não for encontrada.
   */
  getCarProperty(car: Car, label: string): string {
    const prop = car.properties.find(p => p.label.toLowerCase() === label.toLowerCase());
    return prop ? prop.value : 'N/A';
  }

  // ======== SWEETALERT + THREE.JS ========
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private animationId: number | null = null;

  showCarDetails(car: Car) {
    const tableRows = car.properties.map(
      (p) =>
        `<tr>
          <td style="padding: 8px; border: 1px solid #ddd;">${p.label}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${p.value}</td>
        </tr>`
    ).join('');

    Swal.fire({
      title: car.name,
      html: `
        <div id="carContainer" style="width:100%; height:250px;"></div>
        <table style="width:100%; margin-top:20px; border-collapse: collapse;">
          <thead style="background-color:#f2f2f2;">
            <tr>
              <th style="padding: 8px; border: 1px solid #ddd; text-align:left;">Propriedade</th>
              <th style="padding: 8px; border: 1px solid #ddd; text-align:left;">Valor</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>`,
      width: '800px',
      showCloseButton: true,
      showConfirmButton: false,
      didOpen: () => {
        this.load3DModel(car.modelUrl);
      },
      willClose: () => {
        this.cleanup();
      }
    });
  }

  private load3DModel(modelUrl: string) {
    const container = document.getElementById('carContainer') as HTMLElement;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.5;
    container.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(10, 3, 0);
    this.scene.add(dirLight);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;

    const loader = new GLTFLoader();
    loader.load(modelUrl, (gltf) => {
      const car = gltf.scene;
      this.scene.add(car);

      const box = new THREE.Box3().setFromObject(car);
      const size = box.getSize(new THREE.Vector3()).length();
      const center = box.getCenter(new THREE.Vector3());

      this.controls.target.copy(center);
      this.camera.position.copy(center);
      this.camera.position.x += size / 2;
      this.camera.position.y += size / 4;
      this.camera.position.z += size / 2;
      this.controls.update();
    });

    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  private cleanup() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    if (this.controls) this.controls.dispose();
    if (this.renderer) {
      this.renderer.dispose();
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
    }
    this.scene?.clear();
  }
}