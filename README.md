# Exercícios: CSS

* Desenvolvimento de Aplicações Web
* COLTEC/UFMG
* Professor: João Eduardo Montandon


## CSS Zen Garden

O projeto CSS Zen Garden é um site criado por Dave Shea que tem como objetivo demonstrar o poder do CSS no design web.
O conceito é simples: fornecer um único arquivo HTML básico e uma variedade de arquivos CSS diferentes que mudam a aparência do site sem modificar a estrutura HTML.
O projeto se tornou uma vitrine para designers e desenvolvedores demonstrarem suas habilidades em design usando apenas CSS.

Os participantes são incentivados a criar designs inovadores, criativos e impressionantes, mostrando o que pode ser alcançado usando CSS.
Os designers podem baixar o HTML fornecido e criar uma folha de estilo personalizada para transformar o site em sua própria obra de arte.
O site é atualizado regularmente com novos designs apresentados pelos participantes e continua sendo uma plataforma popular para testar as habilidades de design e programação.

**O objetivo desta atividade é criar seu próprio layout CSS!**

## Instruções

Você deverá entregar a atividade por meio dos arquivos `index.html` e `style.css`.

Para realização e entrega dos exercícios, siga as instruções disponíveis na página da disciplina.
Para cada questão, gere um commit específico!!

## Parte I: Introdução

### Aparência geral da página

A primeira etapa a se fazer ao estilizar uma página é definir uma aparência geral.
Mais especificamente, você deverá customizar as seguintes características da página:

* Fonte geral da página não serifada
  * Escolha dentre uma das opções presentes [aqui](https://www.w3schools.com/cssref/css_websafe_fonts.asp).
* Paleta de cores básica (cor de fundo e cor da fonte), onde a cor de fundo deverá ser escura, e a cor da fonte deverá ser clara.
  * Recomendo o uso da ferramenta [Adobe Kuler](https://color.adobe.com).

Para isso, você deverá:

1. Defina um tamanho fixo de fonte geral pra página inteira (`html`).
2. Adicionar ao `body` da página o estilo de fonte, uma cor de fundo, e cor para fonte
3. Identar os parágrafos em pelo menos `1rem`

### Títulos

1. Alinhe todos os títulos da página para centro ou a direita
2. Defina o tamanho dos títulos `h1` em `1.8rem`
3. Defina o tamanho dos títulos `h2` em `1.4rem`
4. Defina o tamanho dos títulos `h3` em `1.2rem`


### Seções de resumo e principal

Localize os elementos que representam a seção de resumo e principal da página, e aplique a elas:

1. Alinhamento a direita ou centralizado para a seção de resumo
2. Espaçamento entre as linhas de `1.5` para os parágrafos da seção principal

### Links e abreviaturas

Customize todos os links e abreviaturas (`<abbr>`) da página da seguinte forma:

1. A fonte em negrito (700) para os links, e uma cor diferente da padrão
2. A mesma cor aplicada no link deverá ser aplicada para as abreviaturas


## Parte II: Box Model & Posicionamento


### Posicionamento Geral

1. Defina a largura geral da página em 80%, limitado a no máximo `1280px` de largura

#### Rodapé

Para esse site, iremos "fixar" o rodapé ao final da página para que ele fique sempre visível.

1. Transforme o rodapé em um elemento de bloco, e o faça ocupar toda a largura disponível
2. Fixe o rodapé para que fique visível na parte debaixo da página o tempo todo
3. Aumente o espaçamento entre links presentes dentro do rodapé para 1% a esquerda e a direita (utilize os atributos de `margin`)
4. Inclua um padding no rodapé em si de 1%, e uma cor de fundo que contraste com o fundo do site
5. Aplique uma cor de fonte que contraste com a cor de fundo
6. Defina a margem inferior de toda a página para um valor que seja equivalente a altura do rodapé


#### Painéis principais e laterais

1. Flutue o painel principal a esquerda, fazendo com que ele ocupe 66% da largura da página
2. Flutue o painel lateral também a esquerda, fazendo com que ele ocupe 33% da largura da página
3. Aplique um espaçamento interno de 10px a direita e a esquerda do painel lateral

### Menus

Vamos dar uma melhorada visual nos menus presentes no site.

1. Remova os bullets dos itens de menu do painel lateral
2. Aumente o espaçamento entre os itens do menu para `1em`
3. Centralize os títulos presentes em cada menu
4. Inclua uma borda na parte superior de todos os itens de menu
5. Inclua uma borda **inferior** apenas no último item das listas (dica: use pseudo-seletores!)

### Mais mudanças na tipografia

Vamos incrementar os parágrafos presentes no nosso texto.

#### Parágrafos

Para a primeira letra do primeiro parágrafo das seções presentes no painel principal:

1. Altere o tamanho da fonte para `2em`
2. Coloque a fonte no maior nível de negrito possível
3. Aplique bordas sólidas de `0.5px` no topo e abaixo

#### Links

1. Remova o underline presente nos links
2. Exiba o underline apenas quando o usuário estiver interagindo com o link
3. Customize as cores dos links para as seguintes situações: normal, hover, e visitado
4. Para os links presentes na área de `design-selection`
   1. Coloque-os em bloco
   2. Inclua o glifo `\00A9` antes o link referente ao autor
   3. Altere o tamanho do glifo para `0.2rem` e o tamanho da fonte para `0.8em`

## Parte III: Page Layout


### Implementação do Grid Layout

Você deverá criar um arquivo CSS chamado `grid.css` e nele implementar um layout de grid de 12 colunas.
Esse layout deverá seguir as seguintes restrições:

* Criar uma classe `.container` para representar o canvas do grid.
* Criar uma classe `.row` para representar uma linha do grid.
* As colunas deverão ser representadas pela classe `.large_col*`, onde `*` representa o número de colunas. Por exemplo, a classe `.large_col1` ocupa uma coluna, enquanto a classe `.large_col6` ocupa seis colunas.
* Espaçamento de 1% a esquerda e a direita de cada coluna.


### Atualização do layout da página

Modifique o layout da página para que ele suporte o grid layout. Para isso você deverá seguir **estritamente** os passos abaixo:

* Adicionar `.container` a `div.page-wrapper`
* Criar uma `div.row` que contenha:
  * `section.intro`
  * `div.main` e `aside.sidebar`
* Aplique a seguinte divisão de colunas:
  * `section.intro`: 12 colunas
    * `header.banner`: 4 colunas
    * `div.summary`: 8 colunas
    * `div.preamble`: 12 colunas
  * `div.main`: 8 colunas
    * `div.explanation`: 12 colunas
    * `div.participation`: 12 colunas
    * `div.requirements`: 12 colunas
  * `aside.sidebar`: 4 colunas

## Parte IV: Design Responsivo

Nesta parte você deverá adicionar suporte ao design responsivo através do uso de *media queries*.
Esse suporte se dará da seguinte forma:

* Definir breakpoints para dimensão mobile (`small`), tablet (`medium`), e desktop (`large`).
* O layout atual deverá ser atribuído a versão desktop.
* Na versão tablet, o `header.banner` e `div.summary` deverão ocupar 12 colunas, cada.
* Na versão mobile, a  `div.main` e o `aside.sidebar` deverão ocupar 12 colunas, cada.