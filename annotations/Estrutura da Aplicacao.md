## Estrutura da Aplicação

### Conhecendo o Fastify 

#### Porque utilizar o Fastity e não o express?

1 - O Fastify é bem mais mantido do que o Express, ou seja, temos muito mais updates acontecendo dentro do fastify do que nos express, novas features, novas manutenções

2 - O fastify continua sendo uma das opções mais populares dentro do node e a sua api é extremamente semelhante ao express, mesmo aprendendendo o fastify que é mais atual e mais atualizada, mesmo que um dia possamos trabalhar com o express, pela similaridade da api, quase não teremos problemas em trabalhar com as duas tecnologias

3 - Além de ser mais perfomática, ele está mais pronto em lidar com novas funcionalidades do javascript, ex: typescript, já que temos que instalar no express uma outra lib para utilizar o typescript e ele está mais pronto para lidar com o assincronismo do javascript, mais moderno

### Entendendo o Typescript

O Typescript é um superset que nada mais é que um adicional ao javascript onde conseguimos trabalhar com tipagem estática (nada mais é do que trazer mais inteligência para o código), inteligência no sentido de que evitar que alguns erros vão para produção, ex: muitas das coisas que a gente desenvolve localmente, a gente só vai descobrir que ocorreu um erro (seja por enviar um parâmetro errado ou algo assim) quando só vai para produção ou usuário que apontou o erro

Exemplo na pasta: annotations/typescript_examples

O NodeJS não entende Typescript por padrão por isso precisamos converter nosso arquivo typescript para javascript

```
npm i -D typescript
npx tsc --init
npx tsc src/index.ts
```

### Utilizando o ESLint

- EcmaScript Lint

Imagine que trabalhemos com várias pessoas na equipe e todas elas digitam o código de maneira diferente, o eslint faz com que padronizemos os códigos, no javascript ; é facultativo, aspas simples e aspas duplas, assim sucessivamente, não interessa qual você prefere o ponto é que precisa ser padronizado

```
npm i -D eslint
npm i @rocketseat/eslint-config -D // Padrões da rocketseat
```