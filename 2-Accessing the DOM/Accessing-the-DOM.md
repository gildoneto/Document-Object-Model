## Accessing the DOM

#### How do we use JavaScript to Access the DOM

Para acessar o DOM, podemos usar o objeto `document`.
Todo browser usa o DOM pra permitir que o JavaScript o acesse.
Browsers diferentes tem seus próprios DOMs com suas próprias nuances.

As vezes, queremos mais controle do que apenas acessar o `document`.
Existem várias maneiras de acessar elementos na nossa página.

```javascript
document.getElementById(); // retorna um objeto do elemento
document.getElementsByClassName(); // retorna uma HTMLCollection
document.getElementsByTagName(); // retorna uma HTMLCollection
document.querySelector(); // retorna um objeto do elemento
document.querySelectorAll(); // retorna uma NodeList
```

O DOM é a representação visual da sua página.
O browser nos dá acesso a essa estrutura via **DOM API**.
E o **DOM API** nos dá vários métodos que podemos usar para acessar o DOM.
Normalmente usamos JavaScript para executar esses métodos.

#### O ponto crucial é entender HTML

O **DOM** frequentemente é referido como **Árvore DOM**.
Essa árvore consiste em inúmeros objetos chamados de `Nodes`.
Para entender como acessar o DOM, você precisa entender HTML.

```HTML
<h1 id="heading">Acesando o DOM</h1>
```

**h1** -> tag
**id** -> atributo
**heading** -> valor do atributo
**Acesando o DOM** -> é o texto
**Tudo isso junto** -> é o elemento

##### getElementById()

Uma das várias maneiras de acessar o DOM.

Costumava ser a única maneira que poderíamos acessar um elemento no árvore DOM.
Recebe apenas um agumento -> o `id` do elemento que você quer acessar.
Muito útil quando você quer ter um acesso rápido a um elemento na DOM.
É muito intuitivo.
Returna um `Element Node`.

DESVANTAGENS

- O id precisa ser único.
- Só pode acessar um elemento.

##### getElementsByClassName()

Uma das várias maneiras de acessar o DOM.

Retorna uma **live HTMLColection**.
Recebe apenas um agumento -> o(s) nome(s) da(s) `classe` que você quer acessar.

##### getElementsByTagName()

Uma das várias maneiras de acessar o DOM.

Este método faz a procura por todos os `Nodes`, e acha todos os elementos com o tag name específico.
Por esta razão, pode ser pesado.
Retorna uma **live HTMLColection**.
Apesar de retornar uma lista, não exatamente um `Array`.

##### querySelector()

A forma mais atual de acessar o DOM.
Quando usamos jQuery, usamos seletores CSS para acessar o DOM. `$()`
`$('#main')` -> retorna um elemento com o id='main'
`$('')` ->
`$('')` ->
`$('')` ->

Agora podemos fazer o mesmo com JavaScript puro (vanilla JS).
Em 2013, foi lançado a API de seletores.

```javascript
querySelector(); // encontra um elemento único
querySelectorAll(); // encontra todos os elementos
```

Para entender o querySelector, você precisa entender seletore CSS.

`#test` -> Elemento(s) com a ID test
`#test .demo` -> Elemento(s) com a classe "demo" que são filhos de um elemento com a id "test"
`#test.demo` -> Elemento(s) com a id "test" E(&&) com a classe "demo"
`.test` -> Elemento(s) com a classe test
`a:hover` -> Tags a(anchor) com o hover
`*` -> Todos os elementos (star selector)
`:link` -> Todas as pseudo-elements
`:visited` -> Todas as pseudo-elements
