function tambah (a,b){
    console.log(a);
    console.log(b);
     return a + b;
}
function kurang (a,b){
    console.log(a);
    console.log(b);
     return a - b;
}
function kali (a,b){
    console.log(a);
    console.log(b);
     return a * b;
}
function bagi (a,b){
    console.log(a);
    console.log(b);
     return a / b;
}

let Users = prompt("Masukkan operator aritmatika +,-,*,/");

if (Users == "+"){
    var a = parseInt(prompt("Masukkan angka 1 :"));
    var b = parseInt(prompt("Masukkan angka 2 :"));
    var c = tambah(a,b);
    console.log(`hasilnya`, c)
}

else if (Users == "-"){
    var a = parseInt(prompt("Masukkan angka 1 :"));
    var b = parseInt(prompt("Masukkan angka 2 :"));
    var c = kurang(a,b);
    console.log(`hasilnya`, c)
}

else if (Users == "*"){
    var a = parseInt(prompt("Masukkan angka 1 :"));
    var b = parseInt(prompt("Masukkan angka 2 :"));
    var c = kali(a,b);
    console.log(`hasilnya`, c)
}

else if (Users == "/"){
    var a = parseInt(prompt("Masukkan angka 1 :"));
    var b = parseInt(prompt("Masukkan angka 2 :"));
    var c = bagi(a,b);
    console.log(`hasilnya`, c)
}








