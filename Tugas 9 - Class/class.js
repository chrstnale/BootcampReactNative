class Animal {
    constructor(name) {
        this.animal_name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }

    get name() {
        return this.animal_name;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Code class Ape dan class Frog di sini
class Ape extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
    }

    yell() {
        console.log("Auooo");
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
        this.cold_blooded = true;
    }

    jump() {
        console.log("hop hop");
    }
}
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 


class Clock {
    constructor({template}) {
        this.template = template;
    }

    render(template){
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
    

}

var clock = new Clock({template: 'h:m:s'});
clock.start();  