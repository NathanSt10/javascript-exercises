const findTheOldest = function(people) {
    return oldest = people.reduce((oldestPerson, person) => {
        return (person.yearOfDeath - person.yearOfBirth > oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) ? person : oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
