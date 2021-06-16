/*
Snack 4 - 
Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
nome
cognome
age
descrizione

Per nome, cognome ed age assegnate direttamente nel codice i valori che volete. 
ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.

{
  nome: 'Pippo',
  cognome: 'Baudo',
  age: 80,
  descrizione: ''
} 

Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà. 

Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;) 

Stampiamo con un console.log il risultato di questo array di studenti aggiornato.

Bonus
Visualizzare nell’html questi dati in una forma tabellare.
*/
var registro = document.getElementById('result');

var students = [
    {
        name: "Sebastian",
        surname: "Rizzo",
        age: 32,
        description: ""
    },
    {
        name: "Daniele",
        surname: "Bosca",
        age: 19,
        description: ""
    },
    {
        name: "Andrea",
        surname: "Caratti",
        age: 24,
        description: ""
    }
]

console.log("Questo è l' array dei dati PRIMA di aver inserito una descrizione: ", students);

for(var i = 0; i < students.length; i++) {
    var userDescription = prompt("Inserisci una descrizione per questo utente")
    students[i].description = userDescription;
    registro.innerHTML += 'name' + ' : ' + students[i].name + "<br>" + 'surname' + ' : ' + students[i].surname + "<br>" + 'age' + ' : ' + students[i].age + "<br>" + 'description' + ' : ' + students[i].description + "<hr>";  
}

console.log("Questo è l' array dei dati DOPO di aver inserito una descrizione: ", students);