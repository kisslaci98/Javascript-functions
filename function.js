'use strict';

//Ez a függvénydeklarációs módszer.

/*function Osszead(a, b) {
    return a + b;
}

let eredmeny = Osszead(420, 69);

document.getElementById('kiir').innerText = eredmeny;

console.log(eredmeny);
console.log(Osszead(-96, 485));*/

/*function OsszeadInput() {
    let elso = window.prompt('Kérem az első számot: ');
    let masodik = window.prompt('Kérem a második számot: ');
    //console.log(`Az eredmény:  ${+elso + +masodik}`);
    console.log(`Az eredmény:  ${Number(elso) + Number(masodik)}`);
}

OsszeadInput();*/

/*EhesVagy();

function EhesVagy() {
    let ehes = window.confirm('Éhes vagy?');
    if (ehes == true){
        console.log('Akkor egyél valamit.')
    }
    else {
        console.log('Egészségedre.')
    }
}*/

//EhesVagy();

//Ez a függvény literál módszer.

/*console.log(Osszead(123, 321));

let Osszead = function (a, b) {
    return a + b;
};*/

//console.log(Osszead(123, 321));

/*let EhesVagy = function () {
    if (window.confirm('Éhes vagy?')) {
        console.log('Akkor zabálj egyet.');
    }
    else {
        console.log('Akkor ne ögyé.');
    }
};

EhesVagy();*/

/*function tudszSzamolni() {
    let tudszE = window.confirm('Tudsz számokat összeadni?');
    if (tudszE == true) {
            let elso = window.prompt('Kérem az első számot: ');
            let masodik = window.prompt('Kérem a második számot: ');
            console.log(`Az eredmény: ${Number(elso) + Number(masodik)}`);
    }
    else{
        console.log('Akkor menj vissza a suliba tanulni.')
    }
}

tudszSzamolni();*/

/*function szamol(question, igen, nem){
    if(window.confirm(question)) {
        igen();
    }
    else {
        nem();
    }
}

szamol('Tudsz számolni?',
function () {
    let elso = window.prompt('Az első szám: ');
    let masodik = window.prompt('A második szám: ');
    console.log(`Az eredmény: ${Number(elso) + Number(masodik)}`);
},
function(){
    console.log('Akkor zsa vissza a suleeba.');
}
)*/

//Arrow function (nyíl függvény)

//Függvény literál
let Osszead = (a, b) => a + b;

console.log(Osszead(39, 554));

/*Megjegyzések*/

/*Ha nincs paraméter, akkor
let ValamilyenFuggveny = () => ;

Ha egy paraméter van, akkor
let ValamilyenFuggveny = (a) => ;
let ValamilyenFuggveny = a => ;

Többsoros utasítás esetén be kell szúrni a return-t:
let ValamilyenFuggveny = () => {
    ....
    return ..;
};*/