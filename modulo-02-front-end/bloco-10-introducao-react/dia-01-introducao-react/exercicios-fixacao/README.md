
### ⚠️ Exercícios realizados durante o curso da Trybe, todos os enunciado e códigos descritos nesse README são de total propriedade intelectual da Trybe podendo sofrer sansões jurídicas caso seja utilizado de forma indevida, classificadas como cópia intelectual e plagio.

### ⚠️ Todo o código contido nos arquivos desse diretório foram desenvolvidos por mim utilizando o conhecimento adquirido durante o curso e executando os exercícios propostos abaixo:

<hr>
<br>
<br>

## Exercício 1

### 📁 fixation-exercises-10.1-app

1- Para fixar, crie um elemento JSX que recebe o valor "Hello, JSX" de uma constante chamada textJSX, e o incorpore em uma tag h1.
<hr>
<br>

## Exercício 2

### 📁 fixation-exercises-2-10.1-app

Para fixar tudo o que você aprendeu siga os passos à seguir para criar o seu primeiro componente React de classe:

1- Crie um novo projeto utilizando `npx create-react-app nome-app`

- ⚠️ Substitua o `nome-app` pelo que você desejar para seu app ⚠️

2 - Na pasta `src`, acesse `App.js` e remova todo o conteúdo da função `App`, de modo que ela fique assim:

```  import React from 'react';

  class App extends React.Component {
    render() {
      return ();
    }
  }
  
  export default App;
  ```

3 - Na pasta `src`, crie um arquivo chamado `About.js`. Em seguida, acesse o arquivo `About.js` e crie um componente que retorne um `<h1> `com o seu nome e um parágrafo `<p>` com uma breve descrição sobre você.

- Lembre-se, quando vamos retornar mais de um elemento é preciso que eles estejam dentro de um `<div>`.

4- Vamos criar uma lista das habilidades que você já aprendeu no curso dentro do componente `About`.

- No componente `About`, adicione dentro da função `render`, antes de retornar o JSX o seguinte código:

```
const skills = ["HTML"] // adicione mais habilidades aqui
const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>

```
- Esse código cria uma lista em JSX das habilidades (`jsxSkills`) usando a array de strings `skills`.
- Adicione na array skills mais habilidades que você já aprendeu no curso!
- Adicione um `<h2>` com o título "Minhas Habilidades"
- Adicione uma lista não ordenada depois do título e coloque nela a array `jsxSkills`

5- Importe seu componente em `App.js` de modo que ele seja renderizado na tela quando a aplicação for iniciada, `npm start`.

- Para isso você precisará utilizar o `export default` para exportar seu componente, o `export default` é sempre utilizado quando queremos exportar apenas um elemento de um arquivo, seja uma função, um componente ou uma variável. A penúltima linha do arquivo `About.js` deverá ficar da seguinte forma:

```
    export default About;
```
6- Execute sua aplicação, `npm start`, e verifique se tudo ocorreu como o esperado. Ao finalizar esse exercício você terá feito o seu primeiro componente React de classe. Parabéns! 🎉

*Nota: Ao rodar a aplicação, pode aparecer a mensagem de erro `Each child in a list should have a unique "key" prop`. no console do navegador. Mas não se preocupe com isso no momento, pois futuramente será explicado como corrigir esse erro. 😉*