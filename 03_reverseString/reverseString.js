const reverseString = function(string) {
    length = string.length;
    const reverse = [];
    for (let i = length - 1; i >= 0; i--) {
        reverse.push(string.at(i));
    }
    return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
