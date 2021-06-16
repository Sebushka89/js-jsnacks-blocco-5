//Creare un array con tre numeri, calcolare la media di questi tre numeri.
var numbers = [7, 8, 9]
var sum = 0;

for( var i = 0; i < numbers.length; i++ ){
    sum += numbers[i]; //don't forget to add the base
}

var avg = sum/numbers.length;

console.log(avg)

//Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
/*nome
cognome
anno
punteggio
Calcolare il punteggio medio dei tre giocatori.*/

var squadra = [
    {
      nome:'Matteo',
      cognome:'Rizzo',
      anno: 32,
      punteggio:12
    },
    {
      nome:'Adina',
      cognome:'Pop',
      anno: 22,
      punteggio:10
    },
    {
      nome:'Beata',
      cognome:'Corrado',
      anno: 62,
      punteggio:8
    }
];

var sum2 = 0;

for( var i = 0; i < squadra.length; i++ ){
  sum2 += squadra[i].punteggio; //don't forget to add the base
}
console.log("La somma dei punteggi dei giocatori è: ", sum2);

var avg2 = sum2/squadra.length;

console.log("La media dei punteggi dei giocatori è: ", avg2)