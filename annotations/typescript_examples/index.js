/*
JAVASCRIPT CODE

function calculateAgeOfUser(user){
  return new Date().getFullYear() - user.birthYear;
}
* O problema de não utilizar tipagem estatica (typescript, etc), é que essa função calculateAgeOfUser
* ela pode ser chamada com qualquer parametro, se mandamos uma string, ele não dar erro, o editor não exibe o erro
* mesmo sabendo que é entendivel aqui que não podemos mandar uma string, podemos chamar sem nenhum parametro, sendo
* sendo que a mesma espera um parametro, entao precisamos executar o codigo para visualizar os erros e corrigir
* Isso é chamado de Runtime Type Checking, a partir do momento que utilizamos Static Type Checking, conseguimos
* ter no momento da escrita do codigo

calculateAgeOfUser('Kemuel')

calculateAgeOfUser()

*/
function calculateAgeOfUser(user) {
    return new Date().getFullYear() - user.birthYear;
}
calculateAgeOfUser({
    birthYear: 2003
});
