## Módulo 03 - Implementando as rotas

### Requisitos funcionais e não funcionais

#### RF

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

#### RN

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [ ] Deve ser possível identificarmos o usuário entre as requisições;
- [ ] O usuário só pode visualizar transações o qual ele criou; 

### Cookies

Formas da gente manter contexto entre requisições

Mesmo que você não esteja logado, é uma forma da aplicação ou site conseguir validar que a mesma pessoa baseado no id que está salvo nos cookies fez tais requisições/processos, uma vez que você loga na aplicação todo esse histórico que você já havia feito mesmo antes de logar, estão salvos na conta ou seja, você pode até não está autenticado na aplicação e ele ainda assim pegar tudo o que você está fazendo