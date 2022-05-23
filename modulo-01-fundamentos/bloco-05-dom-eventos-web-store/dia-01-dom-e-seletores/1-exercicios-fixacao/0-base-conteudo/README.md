# Seletor `getElementById`

Para começar a praticar, copie para um arquivo em sua máquina o exemplo abaixo.

```
<!DOCTYPE html>
<html>
  <body>
    <header>
      <h2 id="page-title">Título</h2>
      <p id="paragraph">Dê uma cor para este parágrafo!</p>
      <h4 id="subtitle">Subtítulo</h4>
      <p id="second-paragraph">Segundo parágrafo!</p>
    </header>
    <script>
      const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>
```
Agora você! Faça o seguinte:

1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
Por fim, recupere o subtítulo e altere-o também.

3. Há mais formas de você acessar o conteúdo dos elementos do seu HTML. Aí vão algumas outras!
Você pode acessar os elementos filtrando pelo nome da classe:

# Seletores `getElementsByClassName` | `getElementsByTagName`

Utilizando o mesmo template de exercício anterior:

1. Adicione uma classe igual para os dois parágrafos.

2. Recupere os seus parágrafos via código *JavaScript*, usando a função `getElementsByClassName`;

3. Altere algum estilo do primeiro deles.

4. Recupere o subtítulo e altere a cor dele usando a função `getElementsByTagName`.

