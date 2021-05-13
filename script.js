function fillArray (arrayLimiter) {
    const array = [];

    for (let i = 0; i <= arrayLimiter; i++) {
        array[i] = i;
        for (let j = 0; j <= arrayLimiter; j++) {
            array[i][j] = j;
        };
    };

    console.log(array);
};

function dataSort () {
    const data = [
        ['Kauan', 'Joao', 'Marcos'],
        ['Lazzarin', 'Andrade', 'Silva'],
        [17,14,25]
    ];

    for (let i = 0; i <= data[0].length; i++) {
        console.log(`${data[0][i]} ${data[1][i]}`)
    };
    
};


dataSort();
fillArray(10);
