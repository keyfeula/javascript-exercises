const removeFromArray = function(array, ...numsToRemove) {
    for (const num of numsToRemove) {
        index = array.indexOf(num);
        while (index != -1) {
            array.splice(index, 1);
            index = array.indexOf(num);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
