## Módulo 02 - Banco de Dados

Existem várias estratégias de conexão com o banco de dados, todas as tecnologias possuem formas de se comunicar com o banco de dados

As três formas de se conectar são

#### 1 - Drivers nativos 
  Ferramentas, libs de baixo nível que permitem que nos conectemos ao banco de uma maneira não abstrata
  Ex: node-mysql2
  ```
    connection.query(
      'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
      function(err, results, fields) {
        console.log(results); // "results" contêm as linhas retornadas pelo servidor
        console.log(fields); // "fields" contêm metadados adicionais sobre os resultados, quando disponíveis
      }
    );
  ```
#### 2 - Query Builders
  Os query builders nada mais são do que formas do que eu ter que "aprender" muito sql e poder focar na linguagem que estamos trabalhando, no caso do node, temos o KnexJS que é o query builder mais famoso
  Query builder -> construtor de queries, o grande ponto é ele facilitar a escrita do sql com código javascript
  As sintaxes utilizadas no query builder pode ser utilizada em qualquer banco que o mesmo suporte
  ```
    knex('users')
    .where((builder) =>
      builder
        .whereIn('id', [1, 11, 15])
        .whereNotIn('id', [17, 19])
    )
    .andWhere(function() {
      this.where('id', '>', 10)
    })
  ```

#### 3 - ORM´s
  Nível de abstração muito maior, quase não nos preocupamos com as queries que seram realizadas nas consultas, inserções e etc
  As sintaxes utilizadas no orm´s pode ser utilizada em qualquer banco que o mesmo suporte

### Knex Sintaxe

UP -> O que essa migration irá fazer, o que ela vai fazer no banco de dados, 

```
export async function up(knex: Knex): Promise<void> {}
```

DOWN -> Cara, deu merda kkk, apaga o que você fez no up

```
export async function down(knex: Knex): Promise<void> {}
```

Para executar uma nova migration:

```
npm run knex -- migrate:latest
```

Se por acaso você criou uma migration e esqueceu de algum campo, mas o seu time já executou aquela migration, nunca alterar o que já foi feito, você deve criar uma nova migration alterando aquela tabela

```
npm run knex -- migrate:make add-session-id-to-transactions
export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.uuid('session_id').after('id').index()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.dropColumn('session_id')
  })
}
npm run knex -- migrate:latest
```
O index em uma tabela no banco de dados representa que iremos fazer muitas buscas na tabela Y na coluna X

Caso você criou e ainda não enviou, executar um rollback da migration

```
npm run knex -- migrate:rollback
```