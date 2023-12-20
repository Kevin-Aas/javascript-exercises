const findTheOldest = function(people) {
    people.sort(function(a, b) {
        if (a.yearOfDeath == undefined) {
            a.yearOfDeath = new Date().getFullYear();
        };
        if (b.yearOfDeath == undefined) {
            b.yearOfDeath = new Date().getFullYear();
        };
        let ageA = a.yearOfDeath - a.yearOfBirth;
        let ageB = b.yearOfDeath - b.yearOfBirth;
        return ageA - ageB;
    });
    return people.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
