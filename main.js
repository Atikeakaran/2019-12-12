// 1. Kullanici tarafindan girilecek bir rakamin faktöriyelini hesaplayip
// consola yazdiran js kodu

/*
1- kullanıcıdan rakam alınacak - window.prompt
2- string > number
3- 0, negatif sayı, kullanıcı uyarılacak
4- ondalık sayıyı tam sayıya çevirmeniz gerekli
5- for loop
6- if conditions



var num = window.prompt('bir sayı giriniz : ');
//num = parseInt(num);
num = Math.floor(num);

var faktoriyel = 1;

if ( num === 0 ){
console.log(`${num}! faktoriyel= 1.`)
} else if (num < 0 ) {
    window.alert("Lütfen pozitif bir sayı giriniz!")
} else {

    for ( var i= 1; i <= num; i++){
        faktoriyel = faktoriyel * i;
    }
    console.log(`${num}! faktoriyel = ${faktoriyel}.`)
    console.log( num + "! faktoriyel = " + faktoriyel + ".")
} 
*/

//2.verilen bir array içerisnde mevcut elemanlardan string olanları seçip 
//yeni array e atayacak ve yeni array i consola yazdıracak kodlar

/*
1. for loop
2. if condotions
3. typeof()
4. .push()

*/

var array = [1, 5, 'istanbul', 'ankara', 15, 0.45, 'bursa', {},
    [1, 2],
    function () {}, 'izmir'
];

var newArray = [];

// for ( var i = 0; i < array.length; i++) {
//     if( typeof array [i] === 'string') {
//     newArray.push(array[i]);
//         console.log(`${array[i]} is typeof string ` );
//     } else {
// console.log(`${array[i]} is NOT typeof string, it's type is ` + 
// (typeof(array[i])).toUpperCase());
//     }
// }
// console.log (newArray);

newArray = array.filter(item => typeof (item) === 'string').map(item => console.log(item));


//  3.  verilen array deki tekrarları önleyecek şekilde yeni bir array ve rakamları bir kez olacak şekilde oluşturulması isteniyor
/*
1- for loop
2- 

*/




var x = [1, 2, 2, 3, 6, 7, 3, 9, 3, 6, 1, 4, 2, 3, 5, 5, 9, 3, 6, 1, 0];

var newX = [];

// for ( var i = 0; i < x.length; i++ ){
//     if(newX.includes(x[i])){
//         continue;
//     } else {
//         newX.push(x[i]);
//     }
// }

for (var i = 0; i < x.length; i++ ){
    if (!newX.includes(x[i])){
        newX.push(x[i]);
    }
}

console.log(x.length);
console.log(newX);

newX.filter(item=> item<8).map(item=> console.log(item));

newX = x.filter( item => item < 8);
console.log(newX);