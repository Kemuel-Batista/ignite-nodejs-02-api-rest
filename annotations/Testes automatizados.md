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

#### Pirâmide de testes

O primeiro tipo teste que devemos aprender é E2E, pois não dependem de nenhuma tecnologia, não dependem de nenhuma arquitetura de software, não dependem de nada, de qualquer pessoa pode fazer esse teste
Esses teste são extremamente lentos, 2000 testes -> Testes E2E => 16 min por exemplo executando testes do nosso código antes de ir para produção e imagine que o último teste falhe e agora?

Os testes unitários sempre estarão em maior quantidade em nossa aplicação e por isso ele é a base