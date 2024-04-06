const sumAll = function(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let smallest = 0;
    let biggest = 0;
    if (num1 < num2) {
        smallest = num1;
        biggest = num2;
    }
    else {
        smallest = num2;
        biggest = num1;
    }
    let sum = smallest;
    while (smallest < biggest) {
        smallest++;
        sum += smallest;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
