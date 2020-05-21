let x = Math.floor(Math.random() * 60) + 1
class Human {
    constructor(data) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.age = data.age;
        this.weight = data.weight;
    }
    speakFullName() {
        console.log(`First name: ${this.firstName}, last name: ${this.lastName}, age: ${this.age}, weight: ${this.weight}`);
    }
}

class Man extends Human {
    constructor(data) {
        super(data);
        this.sex = 'man';
    }
    manFullDetails() {
        this.speakFullName();
        console.log(`sex: ${this.sex}`)
    }
}

class Hunter extends Man {
    constructor(data) {
        super(data)
        this.food = 5;
    }
    getFood() {
        console.log(`You got ${this.food} pieces of bread`);
    }
    huntFood() {
        console.log(`You hunted an animal, your food count increased by 1 and it is now ${this.food}`);
        this.food += 1;
    }
    cookFood(foodName) {
        console.log(`Today im going to cook a ${foodName}, which will be ready in ${x} minutes`);
    }
}
class Worker extends Man {
    constructor(data) {
        super(data)
        this.lumber = 10;
    }
    getMoreLumber() {
        console.log(`We need more lumber. Your lumber count increased by 1 and now is: ${this.lumber} pieces`);
        this.lumber += 1;
    }
    lumberCount() {
        console.log(`Your lumber count is ${this.lumber}`);
    }
}

class Woman extends Human {
    constructor(data) {
        super(data);
        this.sex = 'female'
    }
    womanFullDetails() {
        this.speakFullName();
        console.log(`sex: ${this.sex}`)
    }
}

class Librarian extends Woman {
    constructor(data) {
        super(data);
        this.booksRead = 0;
    }
    readBook() {
        console.log(`I read one more book`);
        this.booksRead += 1;

    }
    getTotalBookRead() {
        console.log(`I read ${this.booksRead} books in total`);
    }
}

class Nurse extends Woman {
    constructor(data) {
        super(data);
        this.patients = 0;
        this.healed = 0;
    }
    getTotalPatient() {
        console.log(`I seen ${this.patients} patients`)
    }
    seePatient() {
        console.log(`I just seen a patient`);
        this.patients += 1;
    }
    getHealedPatients() {
        console.log(`My Total healed patients ${this.healed}`);
    }
    healPatien() {
        console.log(`Heal patient`);
        this.healed += 1;
    }
}

//ANIMALS
class Animal {
    constructor(data) {
        this.name = data.name;
        this.legs = data.legs;
        this.height = data.height;
        this.speed = data.speed;
    }
    voice(animal) {
        console.log(`animal ${animal} makes some noise`);
    }
    getAnimalDetails() {
        console.log(`Animal: ${this.name}, this animal got ${this.legs}, height is around ${this.height} and it can walk as fast as ${this.speed} metres`);
    }
}


class Herbivorous extends Animal {
    constructor(data) {
        super(data)
        this.type = 'Herbivorous';
    }
    details() {
        this.getAnimalDetails();
        console.log(`This animal type is ${this.type}`)
    }
}


class Predator extends Animal {
    constructor(data) {
        super(data)
        this.type = 'Predator'
    }
    details() {
        this.getAnimalDetails();
        console.log(`This animal type is ${this.type}`)
    }
}


const Zoo = (function () {
    let hunter = new Hunter({
        firstName: `HunterIvan`,
        lastName: `HunterIvanenko`,
        age: 30,
        weight: 90,
        sex: 'man'
    });
    let worker = new Worker({
        firstName: `WorkerIvan`,
        lastName: `WorkerIvanenko`,
        age: 31,
        weight: 91,
        sex: this.sex
    });
    let librarian = new Librarian({
        firstName: `librarianIra`,
        lastName: `librarianIra`,
        age: 31,
        weight: 91,
        sex: this.sex
    });
    let nurse = new Nurse({
        firstName: `nurseIra`,
        lastName: `nurseIra`,
        age: 31,
        weight: 91,
        sex: this.sex
    });
    let herbal1 = new Herbivorous({
        name: `Cow`,
        legs: 4,
        height: 115,
        speed: 15
    });
    let herbal2 = new Herbivorous({
        name: `Horse`,
        legs: 4,
        height: 201,
        speed: 85
    });
    let predator1 = new Predator({
        name: `Lion`,
        legs: 4,
        height: 140,
        speed: 120
    });
    let predator2 = new Predator({
        name: `crocodile`,
        legs: 4,
        height: 42,
        speed: 30
    });

    function zooFunctions() {
        console.log(`------Zoo Life------`)
        hunter.manFullDetails();
        hunter.huntFood();
        hunter.getFood();
        hunter.cookFood(`chicken`);
        worker.manFullDetails();
        worker.getMoreLumber();
        worker.lumberCount();
        librarian.womanFullDetails();
        librarian.readBook();
        librarian.getTotalBookRead();
        nurse.womanFullDetails();
        nurse.seePatient();
        nurse.healPatien();
        nurse.getHealedPatients();
        nurse.getTotalPatient();
        herbal1.details();
        herbal2.details();
        herbal1.voice(`cow`);
        predator1.details();
        predator2.details();
        predator2.voice(`crocodile`);
    }
    return {
        zooFunctions: zooFunctions
    }
})();

Zoo.zooFunctions();
