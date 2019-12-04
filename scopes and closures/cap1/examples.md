### Busca LHS e RHS

```js
function foo(a) {
  console.log(a); // 2
}
foo(2);
```

- Total de Buscas LHS: 1;
- Total de Buscas RHS: 3;

#### Desafio

Identifique todas as buscas LHS e RHS.

```js
function foo(a) {
  var b = a;
  return a + b;
}

var c = foo(2);
```

- Total de buscas LHS: 3;

  - 'c = ', 'a = 2', 'b = ';

- Total de buscas RHS: 4;
  - 'foo(2)', ' = a', 'a + ', ' + b'
