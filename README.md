# Meu Projeto Angular Interativo

Este é um projeto de demonstração desenvolvido com Angular, focado em criar uma interface de usuário rica e moderna, com componentes interativos como carrosséis, modais com modelos 3D e animações de rolagem suaves.

## Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas:
* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [Angular CLI](https://angular.dev/cli) instalado globalmente:
    ```bash
    npm install -g @angular/cli
    ```

## Instalação e Execução

Siga os passos abaixo para rodar o projeto em seu ambiente local.

1.  **Clone o repositório (se aplicável):**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Instale as dependências do projeto:**
    Este comando irá instalar o Angular e todas as bibliotecas listadas abaixo.
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```

4.  **Acesse a aplicação:**
    Abra seu navegador e acesse `http://localhost:4200/`.

## Bibliotecas Externas Utilizadas

Este projeto utiliza algumas bibliotecas externas para funcionalidades específicas.

### Comando de Instalação

Para instalar todas as bibliotecas de uma vez, caso esteja começando um projeto do zero, use o comando:

```bash
npm install gsap swiper lucide-angular sweetalert2
```

### Detalhes das Bibliotecas

Aqui está a lista de bibliotecas que usamos e o propósito de cada uma no projeto:

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
    * **Como usamos?** Para exibir a **janela modal com os detalhes do carro** e o modelo 3D interativo quando o usuário clica no botão "Rent Car".