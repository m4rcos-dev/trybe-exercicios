# O que vamos aprender?

Já era hora de parar de enviar seus arquivos de código via e-mail, não é mesmo? Adeus arquivos com nomes do **tipo xxxxx-v1, xxxxx-v2, xxxxx-Final, xxxxx-Final2.zip hahaha!**

Hoje você vai aprender os principais conceitos do controle de versão e os diferentes tipos de sistemas de controle de versão disponíveis.
Depois de ter uma visão geral, vamos focar no Git, um sistema de controle de versão distribuído (DVCS) que permite que um time trabalhe em um mesmo projeto ou em um mesmo arquivo e provê ferramentas para contornar a maioria dos problemas que podemos ter nesse tipo de situação.
Esse é o sistema que utilizaremos durante todo o seu curso aqui na Trybe e, por isso, é importante que você fique bem familiarizado com ele para fazer tudo o que temos pela frente.

# Exercício

Para podermos simular um exercício feito, você criará um arquivo .txt com um nome de sua escolha (Exemplo: trybe-skills.txt) e utilizará o conteúdo abaixo.

```
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
```
No final, ao executar o comando `ls -l` na pasta de arquivos deste dia, você deverá receber um retorno parecido com:

```
ls -l

total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt
```
Agora vamos transformar essa pasta em um repositório *Git*:
- Retorne para a raiz da pasta de exercícios;
- Inicialize o repositório com `git init`;
- Crie um arquivo de `README` utilizando o comando `touch README.md`;
- Crie um `commit` inicial utilizando:

```
git add .
git commit -m "Initial commit"
```
1. Vá até o seu GitHub e crie um repositório público, onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;

- Dê ao repositório um nome descritivo, como por exemplo `trybe-exercicios`;

- ⚠️ Lembre-se de não inicializar o repositório com um arquivo `README.md`, pois você já criou um nos passos anteriores! 😉

2. Clique no botão SSH e então copie a URL do repositório;

- Execute o comando para adicionar a URL ao repositório local `git remote add origin "URL_DO_REPOSITÓRIO"`;

- Verifique se tudo está certo com sua URL remota utilizando o comando `git remote -v`. Seu terminal deve conter algo similar a isso:

```
origin	git@github.com:john-snow/know-nothing.git (fetch)
origin	git@github.com:john-snow/know-nothing.git (push)
```
- Em que `john-snow` corresponde ao seu username e `know-nothing` ao nome que você deu ao seu repositório;

- Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro commit para o **GitHub!** 🤩

- Execute o comando `git push origin master` no terminal;

- Vá até o seu GitHub e verifique as novas alterações.

Agora que tal adicionar uma descrição do que é seu repositório no `README.md` ? 💪🏼.

- O `README.md` que você recriou é referente ao repositório `trybe-exercicios`, tendo isso em mente é interessante que você adicione informações relacionadas ao curso da Trybe e o que você está desenvolvendo e o que irá desenvolver;

- Uma outra coisa interessante a se fazer é adicionar um `README.md` dentro do **diretório de exercícios do dia** para colocar a descrição dos exercícios que você desenvolveu;

- Lembre-se de fazer um commit quando terminar de alterar os arquivos;

- Depois do commit, faça sempre um push;

- Confira as alterações no **GitHub**.
