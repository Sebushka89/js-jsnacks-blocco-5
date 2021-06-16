//Creare un oggetto palla che abbia le seguenti proprietà.
var palla = {
        nome: 'palla',
        peso: '10'
    }
console.log(palla)

//Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
palla.peso = parseInt(prompt('Quanto pesa la palla?'));

console.log(palla)

//Inserire  l’oggetto palla in una array var giochi = [];
var giochi = [];

giochi.push(palla);

console.log(giochi)

//Permettere all’utente di inserire un nuovo oggetto all’interno dell’array giochi
var userNome = prompt('Come si chiama?');
var userPeso = prompt('Qual\'è il suo peso?');


var soldato = {
    nome: userNome,
    peso: userPeso,
}

giochi.push(soldato);

console.log(giochi)