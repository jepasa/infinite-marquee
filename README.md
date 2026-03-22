# Infinite Marquee Plugin

[![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)](https://github.com/jepasa/infinite-marquee/releases)
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](LICENSE)

O Infinite Marquee é um plugin JavaScript vanilla criado para designers, webdesigners, agências e times de front-end que precisam de movimento contínuo, elegante e fácil de configurar em sites institucionais, landing pages, vitrines de marcas, logos de clientes, carrosséis promocionais e áreas de destaque.

Sem framework, sem dependências em runtime e sem setup complicado: você adiciona o script, marca o HTML, inicializa o plugin e já tem um marquee profissional, fluido e pronto para personalização.

## Por Que Vale a Pena Usar

- Instalação rápida com script direto no HTML
- Visual premium sem depender de bibliotecas pesadas
- Personalização simples de direção, velocidade e comportamento
- Ideal para logos, parceiros, depoimentos, chamadas comerciais e grids animados
- Compatível com páginas estáticas, CMSs, WordPress, vitrines e projetos sob medida
- Mais controle de UX com pausa por hover, foco e suporte a prefers-reduced-motion
- Bundle único para quem quer praticidade máxima

## Para Quem É

- Webdesigners que querem elevar percepção de qualidade visual sem aumentar complexidade
- Agências que precisam replicar uma solução confiável em vários projetos
- Desenvolvedores que querem um plugin pronto, limpo e fácil de integrar
- Projetos que precisam de movimento constante sem depender de frameworks

## Casos de Uso Que Vendem Bem

- faixa infinita de logos de clientes
- vitrine de produtos ou categorias em destaque
- feed visual de benefícios, selos e diferenciais
- carrossel horizontal ou vertical para campanhas e promoções
- áreas de credibilidade com parceiros, certificações e mídia

## Instalação Em Minutos

Para o usuário final, o caminho recomendado é o bundle único: um arquivo, uma chamada e o plugin pronto para uso.

### Uso por CDN

Se você quiser carregar o plugin diretamente de uma CDN, use o bundle publicado no jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/jepasa/infinite-marquee@v2.1.0/infinite-marquee.bundle.min.js"></script>
```

Depois disso, a classe `InfiniteMarquee` fica disponível globalmente e pode ser inicializada normalmente no seu JavaScript.

#### Exemplo completo com CDN

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinite Marquee via CDN</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f6f7f9;
      }

      .brand-strip {
        overflow: hidden;
        width: 100%;
        padding: 24px 0;
        border-block: 1px solid #e5e7eb;
        background: #ffffff;
      }

      .brand-strip__list {
        display: inline-flex;
        align-items: center;
        gap: 48px;
      }

      .brand-strip__item {
        padding: 14px 22px;
        border-radius: 999px;
        background: #111827;
        color: #ffffff;
        font-weight: 700;
        letter-spacing: 0.04em;
        white-space: nowrap;
      }
    </style>
  </head>
  <body>
    <div class="infinite-marquee-container brand-strip">
      <div class="infinite-marquee-list brand-strip__list">
        <span class="brand-strip__item">Marca 01</span>
        <span class="brand-strip__item">Marca 02</span>
        <span class="brand-strip__item">Marca 03</span>
        <span class="brand-strip__item">Marca 04</span>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/gh/jepasa/infinite-marquee@v2.1.0/infinite-marquee.bundle.min.js"></script>
    <script>
      const marquee = new InfiniteMarquee({
        containerSelector: '.brand-strip',
        listSelector: '.brand-strip__list',
        direction: 'left',
        speed: 35,
        pauseOnHover: true,
      });

      marquee.init();
    </script>
  </body>
</html>
```

### Arquivo recomendado

```html
<script src="/path/to/public-mirror/bundle/infinite-marquee.bundle.min.js"></script>
```

Se sua equipe técnica preferir uma entrega modular, também é possível usar o entrypoint abaixo:

```html
<script src="/path/to/public-mirror/dist/infinite-marquee.min.js"></script>
```

Em ambos os casos, o uso é o mesmo: a classe `InfiniteMarquee` fica disponível globalmente.

## Como Colocar No Ar Em 3 Passos

### 1. Adicione o HTML

Crie um container com a lista de itens que deseja movimentar.

### 2. Ajuste o visual no CSS

Defina espaçamento, altura, fundo e aparência dos elementos.

### 3. Inicialize o plugin

Escolha direção, velocidade e comportamento de pausa.

Em poucos minutos você transforma uma faixa estática em um bloco visual com mais ritmo, sofisticação e sensação de dinamismo.

## Comece Com Este Exemplo

Este exemplo já entrega um resultado convincente para logos, parceiros ou itens promocionais.

### HTML

```html
<div class="infinite-marquee-container brand-strip">
  <div class="infinite-marquee-list brand-strip__list">
    <img src="logo-1.svg" alt="Marca 1" />
    <img src="logo-2.svg" alt="Marca 2" />
    <img src="logo-3.svg" alt="Marca 3" />
    <img src="logo-4.svg" alt="Marca 4" />
  </div>
</div>
```

### CSS

```css
.brand-strip {
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
  border-block: 1px solid #e7e7e7;
  background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
}

.brand-strip__list {
  display: inline-flex;
  align-items: center;
  gap: 48px;
}

.brand-strip__list img {
  height: 42px;
  width: auto;
  object-fit: contain;
  opacity: 0.85;
}
```

### JavaScript

```javascript
const marquee = new InfiniteMarquee({
  containerSelector: '.brand-strip',
  listSelector: '.brand-strip__list',
  direction: 'left',
  speed: 35,
  pauseOnHover: true,
});

marquee.init();
```

## Personalização Sem Complicação

Você não precisa aprender uma API enorme para adaptar o efeito ao layout.

Trocar o estilo visual fica com você. O plugin entra para resolver a animação contínua, a repetição infinita e o comportamento da faixa.

### Controle a direção

- `left`: fluxo clássico para logos e marcas
- `right`: útil para composições espelhadas
- `up`: ótimo para colunas de novidades ou depoimentos
- `down`: alternativa visual para blocos verticais

### Ajuste a sensação de movimento

- `speed: 20` para efeito mais elegante e discreto
- `speed: 30` a `40` para uso comercial equilibrado
- `speed: 50+` para áreas promocionais mais energéticas

### Melhore a experiência do usuário

- `pauseOnHover: true` ajuda leitura e interação
- `pauseOnFocus: true` favorece acessibilidade
- `respectReducedMotion: true` respeita preferências do sistema

## Configuração Essencial

| Opção                  | Tipo    | Padrão                        | O que muda na prática                |
| ---------------------- | ------- | ----------------------------- | ------------------------------------ |
| `containerSelector`    | string  | `.infinite-marquee-container` | Define qual bloco recebe o efeito    |
| `listSelector`         | string  | `.infinite-marquee-list`      | Define a lista de itens animados     |
| `direction`            | string  | `left`                        | Escolhe o sentido da animação        |
| `speed`                | number  | `30`                          | Controla a energia visual do marquee |
| `pauseOnHover`         | boolean | `true`                        | Pausa ao passar o mouse              |
| `pauseOnFocus`         | boolean | `true`                        | Pausa ao focar elementos interativos |
| `respectReducedMotion` | boolean | `true`                        | Respeita acessibilidade do usuário   |

## API Simples, Útil e Direta

- `init()`: prepara a instância e inicia o marquee
- `start()`: inicia ou reinicia a animação
- `stop()`: interrompe a execução
- `pause()`: pausa temporariamente
- `resume()`: retoma do ponto pausado
- `destroy()`: remove listeners, clones e referências

Isso facilita tanto uma página estática simples quanto uma integração em componentes, templates e builders visuais.

## O Que O Plugin Entrega Para Seu Projeto

- percepção visual mais sofisticada com pouco esforço
- melhor aproveitamento de espaços horizontais e verticais
- destaque contínuo para marcas, ofertas e mensagens-chave
- solução reaproveitável em vários sites e clientes
- integração simples que reduz tempo de produção

## Cenários Prontos Para Aplicar

### Logos de clientes

Perfeito para criar faixas de credibilidade em homepages, páginas institucionais e apresentações comerciais.

### Produtos em destaque

Ajuda a manter a vitrine em movimento e aumenta a percepção de dinamismo da página.

### Benefícios e diferenciais

Útil para repetir argumentos de venda, selos, certificações e mensagens-chave sem ocupar muito espaço.

### Seções promocionais

Funciona bem em campanhas, lançamentos e blocos de apoio visual com movimento constante.

## Recursos Técnicos Relevantes

- 4 direções: left, right, up e down
- APIs públicas de ciclo de vida: `init`, `start`, `stop`, `pause`, `resume` e `destroy`
- acessibilidade com suporte a `prefers-reduced-motion`, pausa por hover e pausa por foco
- tipos públicos em TypeScript via `src/infinite-marquee.d.ts`
- zero dependências no runtime distribuído
- arquitetura modular com core, effects, plugins e i18n desacoplado

## Licença

Licença Proprietária. Todos os direitos reservados.

Copyright (c) 2026 Jeferson Padilha

## Suporte

- [Issues no GitHub](https://github.com/jepasa/infinite-marquee/issues)
- [Releases](https://github.com/jepasa/infinite-marquee/releases)
