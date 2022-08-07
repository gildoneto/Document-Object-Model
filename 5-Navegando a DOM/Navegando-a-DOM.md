# Atravessando a DOM

> Às vezes, você desejará percorrer o DOM sem especificar cada elemento de antemão. Aprender a navegar para cima e para baixo na árvore DOM e mover de node para node (ou branch para branch) é essencial para se tornar um desenvolvedor incrível e entender como trabalhar com JavaScript e HTML.

> Nesta seção, veremos como percorrer o DOM (também conhecido como caminhar ou navegar no DOM) com as propriedades parent, child e sibling.

## Como movemos pra cima e pra baixo na DOM?

Primeiro temos que entender como a estrutura de família funciona.
O parent de qualquer node é um node exatamente acima dele.
Existem 2 principais maneiras que podemos usar para acessar o parent node.

1. `parentNode`
2. `parentElement`

O child(filho) do node é o node exatamente abaixo dele.
Os nodes que estão fora do nível de familiaridade são chamados `descendents`.

O sibling(irmão) de um node é qualquer node no mesmo nível.
Os sibling nodes não precisam ser do mesmo tipo.

## Porque navegamos?

Preparando a cena
Digamos que você está relaxando em casa, cuidando da sua vida. Você abre a despensa, querendo uma infusão de café moído na hora.

Mas então …

Você percebe que esqueceu de comprar grãos de café nas lojas (suspiro)!

###### Não se estresse - você tem uma ideia

Você tem um vizinho amigável que é um ávido entusiasta de café como você.

Um problema: você precisa chegar à casa do seu vizinho (dica... você quer se movimentar pelo DOM).

Qual é a maneira mais rápida e eficiente de chegar lá?

É isso:

1. A pé da sua casa até a casa dele (já que você já sabe o endereço dele)?

**_ou_**

2. Pegue o telefone, digite o código de desbloqueio, procure o endereço no Google Maps e caminhe de acordo com as instruções que o Google lhe dá?

#### Atravessando o DOM vs Acessando o DOM

Se você caminhar diretamente de sua casa para a casa dele, estará fazendo o equivalente a atravessar o DOM (também conhecido como: pegar um elemento de um elemento vizinho no DOM).

Se você escolher a opção 2, ao pesquisar o endereço no Google, estará fazendo o equivalente a `document.querySelector` ou outros métodos de acesso DOM para encontrar elementos.

Qual método é mais eficiente?

**Depende**.

A opção 1 pode ser melhor em alguns casos - em uma árvore DOM simples, é muito mais fácil navegar até outros elementos do que ficar muito complicado.
No entanto, nem sempre.
E se a casa do seu amigo estiver localizada em algum beco do centro em alguma rua aleatória (ou seja, e se o nó ou elemento que você está procurando estiver fortemente aninhado em outros elementos)? Como você adivinhou, a opção número 2 é a melhor solução.

## Title

O api da DOM nos permite fazer qualquer coisa com os elementos e seu conteúdo (normalmente via JavaScript)

MAS...

Primeiro precisamos de uma forma de alcançar o node DOM correspondente.
Frequentemente queremos acionar elementos que tem relacionamentos entre eles.
Para fazer isso, precisamos de uma forma de mover de Node para o outro, ou seja, uma forma de atravessar o DOM.

## Parent Node

Para nos ajudar a navegar para cima ou para baixo na Árvore DOM, temos alguns métodos que podemos usar

```javascript
firstChild();
lastChild();
parentNode();
previousSibling();
nextSibling();
children();
```

## Children

## childNodes vs children

## Siblings
