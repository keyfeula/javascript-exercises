const fibonacci = function(n) {
    n = Number(n);
    if (n < 0) {
        return "OOPS";
    }
    //fib(4) = 3;    1 1 2 3 5
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
