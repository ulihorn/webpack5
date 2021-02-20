import { addFirst } from './MyModule';
import * as TheModule from './MyModule';
//import captain from './MyModule';

//console.log(captain);
addFirst('Riker');
TheModule.addFirst('Riker');

function sayHello() {
    let tool: string = 'webpack';
    console.log(`Hello I am ${tool}, welcome to ES6`);
    console.log('Can you find me?');
    $('body').append('<div style="background:#EEE;">does jQuery exist here?</div>');
}

function sayGoodbye() {
    let tail: string = 'Goody';
    alert(`monkey baba ${tail}`);
}

const authors: [string, number][] = [['Frank', 46], ['Sue', 33]];

enum Food { Pizza, FriedChicken, IceCream };
let myFavoriteFood: Food.FriedChicken;

let myMathFunction: (num1: number, num2: number) => string;

function add(n1: number, n2: number): string {
    return "" + n1 + n2;
}

myMathFunction = add;

// Object type definition
type PersonType = {
    firstName: string, lastName: string, age: number
};

let person1: PersonType = {
    firstName: "John", lastName: "Sheridan", age: 52
}

let favoriteCar: null = null;

/*const addNums = (a?: number, b?: number): number => a + b;
const nums: number[] = [5, 6];

console.log(nums);
alert(addNums(...nums));
*/

abstract class BasePlanet {
    protected _name: string;
    protected mass: number;
    protected radius: number;
    constructor(inName: string, inMass: number, inRadius: number) {
        this._name = inName;
        this.mass = inMass;
        this.radius = inRadius;
    }

    abstract collapseToBlackHole(inMoreMass: number): void;

    calcDiameter() {
        return this.radius * 2;
    }
}

class Planet extends BasePlanet {
    //private _name: string = "No name set";
    //protected mass: number;

    constructor(inName: string, inMass: number, inRadius: number) {
        super(inName, inMass, inRadius);
        //this._name = inName;
        //this.mass = inMass;
    }

    get name() {
        return `This planet's name is '${this._name}'.`;
    }

    set name(inName: string) {
        if (inName === "Pluto") {
            this._name = "Not a planet";
        } else {
            this._name = inName;
        }
    }

    public printName() {
        alert(this._name);
    }

    public calcSuperMass(a: number | string): number {
        if (typeof a === "number") {
            return this.mass * a;
        } else {
            return this.mass * parseInt(a);
        }
    }

    collapseToBlackHole(inAdditionalMass: number) {
        // Perform physics-breaking 2001-like monolith magic here
    }
}

class Jupiter extends Planet {
    private colorBands: boolean = true;
    readonly outer: boolean = true;
    constructor() {
        super("Jupiter", 1234, 4000);
    }
}

let p: Planet = new Planet("Uranus", 444, 3000);
alert(p.name); // 'No name set'.
p.name = "Pluto";
alert(p.name); // 'Not a planet' (sorry, little guy!)
p.name = "Venus";
alert(p.name); // 'Venus'


let j: Jupiter = new Jupiter();
alert(j.outer);
//j.outer = false;

console.log(j.printName());

interface IPerson {
    firstName: string;
    hairColor?: string;
    getGreeting(lastName: string): string;
};

function greet(person: IPerson) {
    console.log(`Hello, ${person.firstName}`);
}

const person = { firstName: 'Frank', hairColor: 'Black', getGreeting(lastName: string) { return `Hello, ${this.firstName} ${lastName}` } };
greet(person);

// Object literal
greet({ firstName: 'Frank', hairColor: 'Blond', getGreeting(lastName: string) { return `Hello, ${this.firstName} ${lastName}` } });

interface IEmployee {
    firstName: string;
    greet(): void;
};

class Employee implements IEmployee {
    firstName: string;
    constructor(inFirstName: string) {
        this.firstName = inFirstName;
    }
    greet() {
        console.log(`Hello, ${this.firstName}`)
    }
}

const e = new Employee("Frank");
e.greet();

interface INinja extends IPerson {
    numberOfSwords: number;
}

let ninja = {} as INinja;
ninja.firstName = 'Ryuki';
ninja.numberOfSwords = 2;

namespace MyFirstNamespace {
    export let homeworld: string = 'Jakku';
    export function sayName(): void { console.log('Rey'); };
    export class Jedi { };
    export interface RebelScum { };
}

console.log(MyFirstNamespace.homeworld);

MyFirstNamespace.sayName();

/// <reference path="file1.ts" />
/// <reference path="file2.ts" />

namespace SomeNS {
    export namespace InnerNS {
        export function someFunc() { };
    }
}
SomeNS.InnerNS.someFunc();
import sf = SomeNS.InnerNS.someFunc;
sf();

export { sayHello, sayGoodbye, authors, person1 };