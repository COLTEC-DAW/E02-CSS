# Exercícios: CSS

* Desenvolvimento de Aplicações Web
* COLTEC/UFMG
* Professor: João Eduardo Montandon

## Instruções

Você deverá entregar a atividade por meio dos arquivos `noticia.html` e `noticia.css`.

Para realização e entrega dos exercícios, siga as instruções disponíveis na página da disciplina.
Para cada questão, gere um commit específico!!

## Parte I: Notícia do dia

É hora de dar uma estilizada na página de notícia do dia, criada anteriormente no exercício de HTML.
Para isso, copie o arquivo `noticia.html` da lista de exercícios de HTML, e implemente os requisitos pedidos abaixo:

### T1: Aparência Geral

A primeira etapa a se fazer ao estilizar uma página é definir uma aparência geral. 
Mais especificamente, você deverá customizar as seguintes características da página:

1. Fonte geral da página não serifada
    * Escolha dentre uma das opções presentes [aqui](https://www.w3schools.com/cssref/css_websafe_fonts.asp).
2. Paleta de cores básica (cor de fundo e cor da fonte), onde a cor de fundo deverá ser escura, e a cor da fonte deverá ser clara.
    * Recomendo o uso da ferramenra [Adobe Kuler](https://color.adobe.com).
3. Espaçamento da largura da página (entre 10% e 20%)


### T2: Estilo do título

É hora de customizar o título principal da página. 
O título deve chamar atenção mas não ser agressivo aos olhos do leitor.

1. Aumente o tamanho da fonte para um tamanho que você considere agradável, mas limite ao tamanho de `72px`.
2. Centralize o texto.
3. Adicione um `margin` para prover um espaçamento pequeno entre o título e corpo da notícia.
4. Altere a cor da fonte para dar contraste com o estilo aplicado anteriormente na página. Novamente, use o Adobe Kuler.
5. Altere o `padding` do título para para aumentar o preenchimento do título.

### T3: Customizando subtítulo

O subtítulo deve possuir um estilo diferente do texto convencional, porém diferente do título principal.

1. Alinhe subtítulo a direita.
2. Adicione um efeito de itálico na fonte.

### T4: Parágrafos

Se você fez a parte 01 de forma correta, a fonte dos parágrafos já estão com a fonte devidamente estilizada. 
É necessário fazer alguns outros ajustes.

1. Torne o texto justificado.
2. Aumente o espaçamento entre as linhas para um valor maior que o padrão (maior que `100%`).

## Parte II: Melhorias Avançadas

### T5: Links

O estilo padrão dos links é simplesmente horrível!! 
Você pode dar um **up** alterando as seguintes propriedades:

1. Adicione um efeito de negrito na fonte.
2. Altere as cores do link de acordo com seus diferentes estados (`:link`, `:visited`, `:hover`, `:active`). Configure pelo menos duas cores diferentes. Novamente, utilize o Adobe Kuler para tal.

### T6: Primeiro parágrafo

É normal em sites de notícias que o primeiro parágrafo ganhe um destaque particular. 
Altere-o da seguinte forma:

1. Primeira letra do parágrafo com tamanho de 350%.
2. Escolher um tom mais claro para esse parágrafo.

### T7: Ajustes nos títulos

Foi requisitado que você alterasse o pocionamento dos títulos `<h3>`, `<h4>`, `<h5>` e `<h6>`.

1. Deixe esses elementos alinhados a esquerda.
2. Deixe esses elementos em itálico.

### T8: Links mais ricos

Uma boa prática de customização de links envolve em fornecer ao usuário um elemento visual indicando o tipo de recurso que aquele link abre. 

1. Adicione esse elemento visual em links que abrem PDFs.
    * O símbolo de um arquivo, por exemplo.
2. Adicione efeito similar para páginas do youtube. 
    * O símbolo de um globo, por exemplo.


Para realização desse exercício, você deverá utilizar a biblioteca [font awesome](http://fontawesome.io/).