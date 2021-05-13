class Recursive {
    constructor (data) {
        this.data = data;
        this.iterator = 0;
        return;
    };

    iterate () {
        if (this.iterator < this.data.length) {
            this.iterator++;
            console.log(this.data[this.iterator - 1]);
            this.iterate(); 
            return;
        }
    };
};

const recurse = new Recursive(['Kauan', 'Lazzarin', 'Geronimo']);

recurse.iterate();
