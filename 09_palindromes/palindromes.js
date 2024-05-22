const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    let formattedStr = str
        .toLowerCase()
        .split("")
        .filter(char => alphanumerical.includes(char))
        .join();
    let reversedStr = formattedStr
        .slice()
        .split("")
        .reverse()
        .join("");
    console.log(`rev: ${reversedStr} str: ${formattedStr}`);
    return formattedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
