# Carros Esportivos - Landing Page Interativa com Angular

## Prévia do Projeto
<img width="1898" height="757" alt="image" src="https://github.com/user-attachments/assets/85200f61-8a3b-4b6e-9852-62668686a1fd" />

Este é um projeto de demonstração de uma landing page moderna para uma empresa de aluguel de carros esportivos, desenvolvido com Angular. O foco principal é criar uma experiência de usuário rica e interativa, destacando os veículos de forma única através de modelos 3D.

## ✨ Features

* **Visualização Interativa de Carros em 3D:** Renderização de modelos `.glb` com Three.js, permitindo ao usuário rotacionar e inspecionar os veículos.
* **Navegação com Rolagem Suave:** Animações de scroll suaves e controladas ao clicar nos links de âncora, implementadas com GSAP.
* **Carrossel de Depoimentos:** Um slider responsivo e com autoplay para exibir os testemunhos dos clientes, utilizando SwiperJS.
* **Modais Detalhados:** Pop-ups elegantes com SweetAlert2 para exibir informações detalhadas e o visualizador 3D de cada carro.
* **Design Moderno e Responsivo:** Interface limpa, com foco na experiência do usuário em qualquer dispositivo.

## 🚀 Tecnologias Utilizadas

* **Angular:** Framework principal para a estrutura da aplicação.
* **TypeScript:** Superset do JavaScript para um desenvolvimento mais robusto.
* **SCSS:** Pré-processador CSS para estilos mais organizados e poderosos.

---

## 📚 Bibliotecas Externas Utilizadas

Este projeto utiliza algumas bibliotecas externas para funcionalidades específicas.

### Comando de Instalação

Para instalar todas as bibliotecas de uma vez, use o comando:

```bash
# Bibliotecas principais
npm install gsap swiper lucide-angular sweetalert2 three

# Tipos para o Three.js (essencial para TypeScript)
npm install --save-dev @types/three
```

### Detalhes das Bibliotecas

* ### **Three.js**
    * **O que é?** Uma biblioteca 3D para criar e exibir gráficos tridimensionais no navegador.
    * **Como usamos?** É a estrela do projeto! Utilizada para carregar e renderizar os **modelos 3D interativos** dos carros dentro da janela modal, permitindo que o usuário rotacione e visualize o veículo de todos os ângulos.

* ### **GSAP (GreenSock Animation Platform)**
    * **O que é?** Uma poderosa biblioteca de animação JavaScript para criar animações de alta performance.
    * **Como usamos?** Para criar o efeito de **rolagem suave e controlada** ao clicar nos links da barra de navegação, permitindo ajustar a velocidade e a suavidade da animação.

* ### **SwiperJS**
    * **O que é?** Uma biblioteca moderna e de código aberto para criar sliders e carrosséis responsivos e interativos.
    * **Como usamos?** Para implementar o **carrossel de depoimentos (testimonials)**, com funcionalidades de autoplay, paginação por pontos e múltiplos slides por visualização em telas maiores.

* ### **Lucide Angular**
    * **O que é?** Uma implementação da biblioteca de ícones Lucide para projetos Angular. É leve, customizável e possui uma grande variedade de ícones.
    * **Como usamos?** Para todos os **ícones** da aplicação, como as estrelas de avaliação nos depoimentos e as características dos carros (assentos, combustível, etc.).

* ### **SweetAlert2**
    * **O que é?** Uma biblioteca para criar alertas, pop-ups e modais customizáveis e elegantes, substituindo os alertas padrões do navegador.
    * **Como usamos?** Para exibir a **janela modal com os detalhes do carro** e o modelo 3D interativo quando o usuário clica no botão "See more".

---

## 🛠️ Instalação e Execução Local

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão LTS)
* [Angular CLI](https://angular.dev/cli) (`npm install -g @angular/cli`)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/wellingtoncorreia/CarrosEsportivos.git](https://github.com/wellingtoncorreia/CarrosEsportivos.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd CarrosEsportivos
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```

5.  Abra seu navegador e acesse `http://localhost:4200/`.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
