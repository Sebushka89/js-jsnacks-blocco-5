//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area e stampare il risultato con console.log

var triangolo = {
    base: '20',
    altezza: '10'
}
console.log(triangolo)

var area = (triangolo.base * triangolo.altezza)/2

console.log(area)

var ipotenusa = Math.sqrt(Math.pow(triangolo.base,2) + Math.pow(triangolo.altezza,2));


var perimetro = triangolo.base + triangolo.altezza + ipotenusa


console.log(perimetro)

