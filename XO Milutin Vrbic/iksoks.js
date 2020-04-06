
let nizX= [];
let nizO= [];
let XOregulator=1

let UpisivanjeXO = function(n, m){
    if (XOregulator===1){
        nizX.push(n);
        if (!win()){
            XOregulator = 0;
            m.innerHTML = 'X';
        }
    }
    else {
        nizO.push(n);
        if (!win()){
            XOregulator = 1;
            m.innerHTML = 'O';
        }
    }
}
/*
let komb1=[1,2,3];
let komb2=[4,5,6];
let komb3=[7,8,9];
let komb4=[1,4,7];
let komb5=[2,5,8];
let komb6=[3,6,9];
let komb7=[3,6,9];
let komb8=[1,5,9];
*/
let matrica = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [3,6,9], [1,5,9]];

let win = function(){
    
    for (let i=0; i<=7; i++){
        if (XOregulator===1){
            let a = nizX.indexOf(matrica[i][0]);
            let b = nizX.indexOf(matrica[i][1]);
            let c = nizX.indexOf(matrica[i][2]);
            if (!(a === -1 || b === -1 || c === -1)) {
                alert('X je pobedio');
                return true;
            }
           
        }
        else  {
            let a = nizO.indexOf(matrica[i][0]);
            let b = nizO.indexOf(matrica[i][1]);
            let c = nizO.indexOf(matrica[i][2]);
            if (!(a === -1 || b === -1 || c === -1)) {
                alert('O je pobedio');
                return true;
            }
        }
    }
    return false; 
};

let polje1 = document.getElementById('1');

polje1.addEventListener("click", function(){
    UpisivanjeXO(1, polje1);
});

let polje2 = document.getElementById('2');

polje2.addEventListener("click", function(){
    UpisivanjeXO(2, polje2);
});

let polje3 = document.getElementById('3');

polje3.addEventListener("click", function(){
    UpisivanjeXO(3, polje3);
});

let polje4 = document.getElementById('4');

polje4.addEventListener("click", function(){
    UpisivanjeXO(4, polje4);
});

let polje5 = document.getElementById('5');

polje5.addEventListener("click", function(){
    UpisivanjeXO(5, polje5);
});

let polje6 = document.getElementById('6');

polje6.addEventListener("click", function(){
    UpisivanjeXO(6, polje6);
});

let polje7 = document.getElementById('7');

polje7.addEventListener("click", function(){
    UpisivanjeXO(7, polje7);
});

let polje8 = document.getElementById('8');

polje8.addEventListener("click", function(){
    UpisivanjeXO(8, polje8);
});

let polje9 = document.getElementById('9');

polje9.addEventListener("click", function(){
    UpisivanjeXO(9, polje9);
});

console.log(nizO);
console.log(nizX);
