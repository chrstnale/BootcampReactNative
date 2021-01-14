console.log("\n")
//Soal No. 1
function teriak(){
    return "Halo Sanbers!";
}

console.log(teriak());

console.log("\n")
//Soal No. 2
function kalikan(num1, num2){
    return num1 * num2;
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

console.log("\n")
//Soal No. 3

function introduce() {
    return "Nama saya " + nama + ", umur saya " + age + " tahun, " + "alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}

var nama = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(nama, age, address, hobby)
console.log(perkenalan)