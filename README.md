# Exercícios: CSS Zen Garden

* Desenvolvimento de Aplicações Web
* COLTEC/UFMG
* Professor: João Eduardo Montandon


## O que é?

O CSS Zen Garden é um projeto criado por Dave Shea em 2003 que demonstra a capacidade da linguagem CSS em transformar a aparência de uma página web sem modificar seu conteúdo. O objetivo do projeto é mostrar como o CSS pode ser usado de forma criativa e eficaz para estilizar dar identidade a páginas web, sem a necessidade de alterações no seu código HTML.

O conceito por trás do CSS Zen Garden é simples: uma única página HTML é fornecida como base para todos os participantes do projeto. **O desafio é criar diferentes designs, estilos e layouts para essa página usando apenas CSS**. O conteúdo da página permanece o mesmo, incluindo o texto e as imagens, mas cada designer tem a liberdade de personalizar totalmente a aparência da página.

![website zen garden](./assets/img/zengarden-website.png)

Os designs apresentados no CSS Zen Garden variam de simples e minimalistas a elaborados e criativos, e muitos designers talentosos de todo o mundo contribuíram ao longo dos anos. O site oficial do projeto[^1] serve como uma galeria virtual de designs, permitindo que os visitantes comparem e apreciem as diferentes abordagens de design utilizando apenas CSS.

### Estrutura

![zen garden estrutura](assets/img/zengarden-estrutura.png)

Do ponto de vista de estrutura, a página do CSS Zen Garden pode ser dividida em três grandes containers

#### Intro

Este container contém três componentes e estrutura as **informações introdutórias** do site. Nele você irá encontrar o título, o resumo, e o preâmbulo descritos na página.

#### Main

Esta é a maior seção da página, e descreve detalhadamente o **propósito** da página. Essa seção possui containers que descrevem em detalhes sobre o que o CSS Zen Garden, como participar, os benefícios e requisitos para participar do desafio. Além disso, um footer ao final da seção apresenta os principais links para participar do projeto.

#### Aside

Este container apresenta os links de **navegação para outros recursos** do projeto. Nele contém uma seção para últimos designs, uma seção para designs mais antigos, e uma última seção para outros recursos da página (CSS, recursos, FAQ, etc).


## Exercícios

**O objetivo dos exercícios desta atividade é criar seu próprio layout CSS!**
Para isso você tem a disposição dois arquivos:

* `index.html`, contém o código HTML da página CSS Zen Garden
* `style.css`, contém o código CSS que será utilizado para estilizar a página `index.html`

Em suas tarefas você deverá alterar o arquivo `style.css` com os estilos descritos nos exercícios. 

### T1: Paleta de Cores

Vamos iniciar a construção da nossa versão do CSS Zen Garden!

1. Defina uma paleta de cores que você irá trabalhar.
	- Essa paleta deverá ter pelo menos três cores: uma cor de fundo, uma cor para fonte, e uma cor de destaque.
	- **Dica:** Pense primeiro no tema que você deseja utilizar. Explore as versões já submetidas ao projeto.
	- Utilize ferramentas como o [Adobe Kuler](https://color.adobe.com/) para auxiliar na criação da paleta após escolha do tema.
2. Aplique a cor principal no texto da página, e a cor secundária como cor de fundo.

### T2: Estrutura Textual

Nesta atividade iremos personalizar o texto presente na página [CSS Zen Garden: The Beauty of CSS Design](http://www.csszengarden.com/).

1. **Aspectos gerais.** Aplique os seguintes estilos a estrutura geral da página.
	1. Defina um tamanho fixo para a página inteira
	2. Defina uma fonte do tipo `sans-serif` para a página inteira
	3. Indente os parágrafos em `1em`
2. **Títulos.** Alinhe todos os títulos para o centro ou a direita.
	1. Defina o tamanho do `h1` em `1.8rem`
	2. Defina o tamanho do `h2` em `1.4rem`
	3. Defina o tamanho do `h3` em `1.2rem`
3. **Seções de resumo e principal.** Localize os elementos que representam a seção de resumo e principal da página, e aplique nelas:
	1. Alinhamento a direita ou centralizado para a seção de resumo.
	2. Espaçamento entre as linhas de `1.5` para os parágrafos da seção principal.
4. **Abreviaturas.** Customize todos as abreviaturas para que a fonte seja carregada em `small-caps`.

[^1]: [CSS Zen Garden: The Beauty of CSS Design](https://www.csszengarden.com/)
