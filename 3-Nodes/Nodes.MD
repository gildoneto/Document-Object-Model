# Nodes

## O que é um Node?

Podemos ter diversas coisas no DOM `<p> <h1> <div> comentarios texto etc...`
Chamamos estas coisas de Nodes. E temos tipos diferentes de Node.
Todo e qualquer item na árvore DOM é um Node.
O documento HTML é formado por uma árvore de nós(Nodes) HTML.
Cada Node pode ter **atributos HTML**.
Nodes também podem ter conteúdo, incluído outros nodes e texto.
A maioria dos nodes tem um propósito específico. Ex.: `<title>`

Exatamente tudo é um Node:

1. o documento inteiro
2. cada elemento HTML
3. o texto dentro dos elementos HTML
4. todos os comentários
5. e outras coisas também são nodes como o `<!DOCTYPE>` etc...

### Por que esses elementos `#text` se infiltraram no DOM?

```HTML
<head> <!-- um return, um newline character -->
<!-- um space -->  <title>O que são Nodes?</title> <!-- um return -->
</head>

```

`HTML` -> Node HTML
`HEAD` -> Node de elemento Head
`#text` -> Node de texto(return, e um space `"\n "`)
`TITLE` -> Node de elemento Title
`#text` O que são Nodes? -> Node de texto ("O que são Nodes?")
`#text` -> Node de texto (return)

Qualquer caractere newline ou space são válidos (assim como letras e números)
então eles tem que fazer parte do DOM.

#### Duas exceções

1. Spaces e Newlines acima do elemento `<head>` são ignorados.
2. Spaces e Newlines abaixo do elemento `</body>` são removidos e colocados dentro do elemento `<body>`.

## childNodes

## Tipos de Node

Existem poucos tipos de Node ativos(ou relevantes).
O mais comum e intuitivo é o `ELEMENT_NODE`.

###### O 4 tipos mais comuns que iremos lidar são:

1. `DOCUMENT_NODE` -> Nosso entry point para o DOM
2. `ELEMENT_NODE` -> as tags HTML
3. `TEXT_NODE` -> os textos entre as tags
4. `COMMENT_NODE` -> os comentários

| Constant                        | Value | Description                                                                                                                                                 |
| ------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ELEMENT_NODE**                | 1     | O mais simples. É apenas um Element Node como `<p>` ou `<h1>`                                                                                               |
| **TEXT_NODE**                   | 3     | O texto de fato                                                                                                                                             |
| **CDATA_SECTION_NODE**          | 4     | Estes são caracteres de dados que não são analisados pelo parser.                                                                                           |
| **PROCESSING_INSTRUCTION_NODE** | 7     | Usado com XML para introjetar instruções específicas da aplicação.                                                                                          |
| **COMMENT_NODE**                | 8     | Apenas um comentário como: `<!-- comment -->`                                                                                                               |
| **DOCUMENT_NODE**               | 9     | Nosso Document Node raíz                                                                                                                                    |
| **DOCUMENT_TYPE_NODE**          | 10    | Nossa declaração `<!DOCTYPE html>`                                                                                                                          |
| **DOCUMENT_FRAGMENT_NODE**      | 11    | Um DocumentFragment Node é um objeto document super leve. As vezes você poderá querer extrair uma porção da Árvore de Documentos e criar um novo fragmento. |

#### Revisão

Vimos que existem diferentes tipos de Node.
Mas como iremos saber a qualquer momento com qual tipo de Node estamos lidando?

**FÁCIL**

Todos os Nodes tem as propriedades `nodeType`, `nodeName` e `nodeValue`.
Antes de colocarmos isso em prática, precisamos entender a dinâmica familiar dos nodes.

## Node - Family Tree

```HTML
<body> <!--grandparent-->
  <div> <!--parent and child of body-->
    <h1> Hello </h1> <!--simblings--> <!--child of div-->
    <h2> World </h2> <!--simblings-->
  </div>
</body>
```

Na vida real temos os pais (parents) e os filhos (children). E os pais (parents) também tem seus pais (parents).
E assim como a vida real, o DOM e os Nodes tem seus parents, children e simblings.

## nodeName vs tagName

#### First things first, what is `nodeName`?

Através do `nodeName`, você pode acessar o nome do element ou tag que você está manipulando. Você pode simplesmente dar um console.log no `nodeName`.

Como neste exemplo:

```node
> $0.nodeName;
<- "H1"

```

Embora haja apenas um número distinto de tipos de Nodes (lembre-se, nós abordamos isso em uma aula anterior. Existem Nodes de texto, Nodes de comentário, Nodes de elemento, etc.), o Node **NAMES** lhe dirá com qual elemento ou Node de tag você está lidando. Isso significa que para um elemento `<p>`, a propriedade `nodeName` retornará “P”. E para um elemento `<div>`, o `nodeName` retornado corretamente será “DIV” e assim por diante.

O `nodeName` é uma propriedade somente leitura dos Nodes do DOM. O valor retornado é sempre uma string MAIÚSCULA que representa o tipo de elemento.

Como uma nota lateral, o valor `nodeName` não fornece absolutamente nenhuma outra informação (por exemplo, você não pode descobrir nenhum atributo), então seu uso é limitado, eu acho.

#### Mas espera um pouco, isso não é a mesma coisa que a propriedade `tagName`?

Meio que sim.

Outra propriedade que você pode acessar que lhe dará a mesma resposta é `tagName`. E da mesma forma que `nodeName`, `tagName` retornará o resultado em letras MAIÚSCULAS.

Então eles parecem iguais, da seguinte forma:

```node
> $0.nodeName;
<- "P"
> $0.tagName;
<- "P"

```

#### Então, isso significa que `nodeName` e `tagName` são a mesma coisa?

Não. Eles são diferentes.

A propriedade `tagName` destina-se especificamente a Nodes de elemento (lembre-se de que estes são Nodes do TIPO 1) para obter o tipo de elemento. Mas como você já sabe, existem vários outros TIPOS de nós (como Nodes de comentário, Nodes de texto, etc). Para obter o nome desses Nodes, você não pode usar `tagName`.

Aqui está a prova de que você não pode usar `tagName` em um comentário, por exemplo:

```node
> $0.nodeName;
<- "#comment"
> $0.tagName;
<- undefined

```

Então, ao lidar com Elementos, qual você deve usar – `nodeName` ou `tagName`?

Boa pergunta meu querido aluno 😉

Isso realmente não importa, eu acho. Como acabamos de ver, ao usar `nodeName` em um nó de elemento, você obterá seu nome de tag, então qualquer um deles pode ser usado.

No entanto, se uma arma estivesse apontada para a minha cabeça e eu tivesse que escolher uma em vez da outra, eu provavelmente iria com `nodeName` . Isso provavelmente nos dará uma melhor consistência entre os navegadores.

#### Recapitulando

```javascript
document.getElementById(); // retorna um objeto do elemento
document.getElementsByClassName(); // retorna uma HTMLCollection
document.getElementsByTagName(); // retorna uma HTMLCollection
document.querySelector(); // retorna um objeto do elemento
document.querySelectorAll(); // retorna uma NodeList
```

###### NodeList vs HTMLCollection

NodeList e HTMLCollection são coleções de Nodes do DOM.
Uma NodeList pode conter qualquer tipo de Node(text, comment, element, etc)
Uma HTMLCollection contém apenas elementos Node.

**HTMLCollection** podem ser acessadas pelo nome, id ou index.
**NodeList** podem ser acessadas somente pelo index.

> HTMLCollections são _live_, e items de uma NodeList são _estáticos_
