console.log("\n");
//SOAL NO. 1

function arrayToObject(arr){
    for(i=0;i<arr.length;i++){
        var now = new Date()
        var thisYear = now.getFullYear()  
        var people = {}
        people.firstName= arr[i][0];
        people.lastName = arr[i][1];
        people.gender = arr[i][2];
        if(arr[i][3] == null || arr[i][3] > thisYear){
            people.age = "Invalid Birth Year";
        } else{
            people.age = thisYear - arr[i][3];
        } 
        console.log((i+1) + ". " + people.firstName + " " + people.lastName + ": ");
        console.log(people); 
    }
    console.log("\n");
}

// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people);
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2);
 
// Error case 
arrayToObject([]);

//SOAL NO. 2

function shoppingTime(memberId, money) {
    var harga = {
        "Sepatu Stacattu" : 1500000,
        "Baju Zoro seharga" : 500000,
        "Baju H&N" : 250000,
        "Sweater Uniklooh" : 175000,
        "Casing Handphone" : 50000
    }

    var customer = {}

    if(memberId == null || memberId == ''){
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else{
        customer.memberId = memberId;
    }

    if (money<50000){
        return "Mohon maaf, uang tidak cukup";
    } else {
        customer.money = money;
    }
    
    var bought = new Array();
    var size = Object.keys(harga).length;
    var spent = 0;

    for(i=0;i<size;i++) {
        if(money >= harga[Object.keys(harga)[i]]) {
            bought[i] = Object.keys(harga)[i];
            spent += harga[Object.keys(harga)[i]];
        } 
    }
    var filtered = bought.filter(function (el) {
        return el != null;
      });

    customer.listPurchased = filtered;
    customer.changeMoney = money - spent;
    
    return customer
}
   
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
  console.log(shoppingTime('82Ku8Ma742', 170000));
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member 

console.log("\n");
//SOAL NO. 3

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var arrObj = new Array();
    for (i=0; i<arrPenumpang.length; i++){
        var objPenumpang = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        }


        var bus = arrPenumpang[i][1];
        for(j=0;j<rute.length;j++){
            if(rute[j] == arrPenumpang[i][2]){
                break;
            }else if(bus == rute[j]){
                objPenumpang.bayar += 2000;
                bus = rute[j+1];
            } 
        }

        arrObj[i] = objPenumpang;
    }

    return arrObj;
  }
   
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
  console.log(naikAngkot([])); //[]