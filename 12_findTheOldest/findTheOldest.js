const findTheOldest = function(arr) {
    let oldest = arr[0];
    let oldestAge = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let age = 0;
        if ("yearOfDeath" in current) {
            age = current.yearOfDeath - current.yearOfBirth;
        }
        else {
            age = new Date().getFullYear() - current.yearOfBirth;
        }
        if (age > oldestAge) {
            oldestAge = age;
            oldest = arr[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
