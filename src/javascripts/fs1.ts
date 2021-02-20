function logConstructorFactory(inEnabled: boolean) {
    if (inEnabled) {
        return function (inConstructor: Function) {
            console.log(inConstructor);
        }
    } else {
        return function () { };
    }
}

@logConstructorFactory(true)
class Starship {
    constructor() { console.log("Starship constructor"); }
}

@logConstructorFactory(false)
class Starstation {
    constructor() { console.log("Starstation constructor"); }
}

const s = new Starship();
const t = new Starstation();

function logConstructor(inConstructor: Function) {
    console.log(inConstructor);
}

@logConstructor
class Spaceship {
    constructor() { console.log("constructor"); }
}

const sp = new Spaceship();