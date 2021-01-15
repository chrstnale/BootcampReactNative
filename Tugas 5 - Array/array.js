console.log("\nSOAL NO. 1\n");
//SOAL NO. 1

function range(startNum, finishNum) {
    var numbers = [startNum];
    i = startNum;
    if (startNum == null || finishNum == null) {
        return -1;
        
    } else if (startNum <= finishNum) {
        while(i < finishNum){
            i++;
            numbers.push(i);
        }
        return numbers;

    } else {
        while(i > finishNum){
            i--;
            numbers.push(i);
        }
        return numbers;
    }
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 


console.log("\nSOAL NO. 2\n");
//SOAL NO. 2

function rangeWithStep(startNum, finishNum, step) {
    var numbers = [startNum];
    i = startNum;

    if (startNum <= finishNum) {
        while((i + step) <= finishNum){
            i += step;
            numbers.push(i);
        }
        return numbers;

    } else {
        while((i - step) >= finishNum){
            i -= step;
            numbers.push(i);
        }
        return numbers;
    }
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log("\nSOAL NO. 3\n");
//SOAL NO. 3

function sum(startNum, finishNum, step) {
    //Cek apakah nilai awal dan akhir null
    if (startNum == null){
        startNum = 0;
    }
    if (finishNum == null){
        finishNum = 0;
    }

    //Memberi nilai 1 pada step jika parameter step kosong
    if (step == null){
        step = 1;
    }

    //Membuat array numbers
    numbers = rangeWithStep(startNum, finishNum, step);

    //Menjumlahkan deret array
    var sum = 0;
    for (i=0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log("\nSOAL NO. 4\n");
//SOAL NO. 4

function dataHandling(array) {
    for(i=0;i<array.length;i++){
        console.log("Nomor ID: " + array[i][0]);
        console.log("Nama Lengkap: " + array[i][1]);
        console.log("TTL: " + array[i][2]);
        console.log("Hobi: " + array[i][3]);
        console.log("\n");
    }
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

dataHandling(input);

console.log("SOAL NO. 5\n");
//SOAL NO. 5

var str = "Ale"

function balikKata(str){
    i = str.length - 1;
    var rstr = "";
    while(i >= 0){
        rstr += str[i];
        i--;
    }
    return rstr;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

console.log("\nSOAL NO. 6\n");
//SOAL NO. 5

function dataHandling2(array) {
    array.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    array.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(array);


    bday = array[3].split("/");
    nbday = bday.join("-");
    switch(bday[1]){
        case "01": console.log("Januari"); break;
        case "02": console.log("Februari"); break;
        case "03": console.log("Maret"); break;
        case "04": console.log("April");break;
        case "05": console.log("Mei");break;
        case "06": console.log("Juni"); break;
        case "07": console.log("Juli");break;
        case "08": console.log("Agustus"); break;
        case "09": console.log("September"); break;
        case "10": console.log("Oktober");break;
        case "11": console.log("November");break;
        case "12": console.log("Desember");break;
    }

    bday.sort(function (value1, value2) { return value2 - value1 } ) ;
    console.log(bday);
    console.log(nbday);

    nama = array[1].slice(0,14);
    console.log(nama);
    
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */ 