class Methods {

    constructor (value) {
        this.value = value;
    };

    plus (increment) {
        return this.value + increment;         
    };

    minus (minutive) {
        return this.value - minutive;
    };
}

const CalcMethods = new Methods(12);

console.log(CalcMethods.plus(12));