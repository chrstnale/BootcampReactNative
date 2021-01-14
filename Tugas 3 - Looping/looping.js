console.log("\n");
// SOAL NO. 1
var x = 2;
console.log("LOOPING PERTAMA");
while(x <= 20) {
    console.log(x + " - I love coding");
    x += 2;
}

console.log("LOOPING KEDUA");
while(x > 2) {
    x -= 2;
    console.log(x + " - I will become a mobile developer");
}

console.log("\n");
// SOAL NO. 2
for (y=1;y<=20;y++) {
    if (y % 3 == 0 && y % 2 != 0) {
        console.log(y + " - I Love Coding");
    } else if (y % 2 != 0){
        console.log(y + " - Santai");
    } else if (y % 2 == 0) {
        console.log(y + " - Berkualitas");
    }
}

console.log("\n");
// SOAL NO. 3
for(i=0;i<4;i++) {
    var result = "";
    for(j=0;j<8;j++){
        result += "#";
    }
    console.log(result);
}

console.log("\n");
// SOAL NO. 4
var z=1
for(i=1; i<=7; i++){
    var result = "";
    for(j=0;j<z;j++){
        result += "#";
    }
    console.log(result);
    z++;
}

console.log("\n");
// SOAL NO. 5

for(i=1; i<=8; i++){
    result = "";
    for(j=1; j<=8; j++){
        if((i%2 != 0 && j%2 != 0) || (i%2 == 0 && j%2 == 0)) {
            result += " ";
        }else{
            result += "#";
        }
    }  
    console.log(result);
}