const romanNumeralConverter = (num) => {
    const oneIndexes = {
        0: 'I',
        1: 'X',
        2: 'C',
        3: 'M',
    };
    const twoIndexes = {
        0: 'II',
        1: 'XX',
        2: 'CC',
        3: 'MM',
    };
    const threeIndexes = {
        0: 'III',
        1: 'XXX',
        2: 'CCC',
        3: 'MMM',
    };
    const fourIndexes = {
        0: 'IV',
        1: 'XL',
        2: 'CD',
    };
    const fiveIndexes = {
        0: 'V',
        1: 'L',
        2: 'D',
    };
    const sixIndexes = {
        0: 'VI',
        1: 'LX',
        2: 'DC',
    };
    const sevenIndexes = {
        0: 'VII',
        1: 'LXX',
        2: 'DCC',
    };
    const eightIndexes = {
        0: 'VIII',
        1: 'LXXX',
        2: 'DCCC',
    };
    const nineIndexes = {
        0: 'IX',
        1: 'XC',
        2: 'CM',
    };

    const arr = [];
    let str = num.toString();

    for (let i = 0; i < str.length; i++) {
        arr.unshift(str[i]);
    };

    const newArr = [];

    arr.forEach((elm, index) => {
        if (elm == 1) {
            newArr.unshift(oneIndexes[index]);
        } else if (elm == 2) {
            newArr.unshift(twoIndexes[index]);
        } else if (elm == 3) {
            newArr.unshift(threeIndexes[index]);
        } else if (elm == 4) {
            newArr.unshift(fourIndexes[index]);
        } else if (elm == 5) {
            newArr.unshift(fiveIndexes[index]);
        } else if (elm == 6) {
            newArr.unshift(sixIndexes[index]);
        } else if (elm == 7) {
            newArr.unshift(sevenIndexes[index]);
        } else if (elm == 8) {
            newArr.unshift(eightIndexes[index]);
        } else if (elm == 9) {
            newArr.unshift(nineIndexes[index]);
        }
    })

    const romanNumeral = newArr.join('');

    return romanNumeral;
}

romanNumeralConverter(1994);
