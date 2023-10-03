## Aplicação NodeJS 02 - Trilha Ignite Rocketseat

### Requisitos funcionais e não funcionais

#### RF

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

#### RN

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou; 

### Testes automatizados

São formas de manter a confiança na hora de dar manutenção do código a longo prazo

Não tem nada a ver com garantir que nossa aplicação está funcionando, esse é o próposito final, o próposito anterior a esse é que testes automatizados dão confiança para trabalhar no código inclusive se no base de dados estiver muito mais complexa do que ela está hoje sem ter alguma desconfiança de que o código quebrar

##### Testes unitários

Eles vão testar excluisavemente uma unidade da sua aplicação, pequena parte de forma totalmente isolada, você não testa na rota que lista as datas por exemplo se a função de converter datas estão funcionando, mas sim apenas a função

##### Testes de integração

Quando testamos a comunicação entre duas ou mais unidades de nossa aplicação, uma função que chama outra função e assim sucessivamente ligando o sistema

##### Testes e2e - ponta a ponta

São basicamente testes que simulam um usuário operando na nossa aplicação

front-end: testes e2e, abre a página de login, digite o texto diego@gmail no campo email, clique no botão
back-end: o usuário do back é o front-end, chamadas HTTP, WebSockets, camadas expostas