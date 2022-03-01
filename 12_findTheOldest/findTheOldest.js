const findTheOldest = function(people) {

    let comparisonAge = 0;

    const d = new Date();
    let year = d.getFullYear();
    let index = 0;
    let oldestAge = 0;
    let oldestIndex = 0;
    let oldest = people[0].name;

    if (people[0].yearOfDeath !== undefined) {
        oldestAge = people[0].yearOfDeath - people[0].yearOfBirth;
    }

    else {
        oldestAge = year - people[0].yearOfBirth;
    }

    for (let i = 1; i < (people.length); i++) {

        if (people[i].yearOfBirth !== undefined) {
            comparisonAge = people[i].yearOfDeath - people[i].yearOfBirth;
        }

        else {
            comparisonAge = year - people[i].yearOfBirth;
        }

        if (oldestAge < comparisonAge) {
            oldest = people[i].name;
            oldestIndex = i;
            oldestAge = comparisonAge;
        }

    }

    return people[oldestIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
