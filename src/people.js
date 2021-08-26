/**
 * @typedef {Object} Person
 * @property {string} name - Person's name
 * @property {string} lastname - Person's lastname
 * @property {number} age - Person's age
 * @property {number} weight - Person's weight
 * @property {number} height - Person's height
 */

/**
 * @typedef {Object} PeopleResponse
 * @property {number} ageProm - People average age
 * @property {number} heightProm - People average height
 * @property {Person} youngerPerson - Younger person information
 * @property {Person} tallerPerson - Taller person information
 */

/**
 * The height in cm of several people was taken, in addition, the age of each person and extra information are also known.
 * An algorithm is required to calculate average age and average height. In addition, we need to know the information of the
 * tallest person, and the information of the youngest person.
 *
 * @param {Person[]} people - People information to be processed
 *
 * @returns {PeopleResponse}  - Processed information
 */

function peopleInformation(people) {
  const PeopleResponse = {
    ageProm: 0,
    heightProm: 0,
    youngerPerson: people[0],
    tallerPerson: people[0]
  };

  people.forEach((person) => {
    if (person.age < PeopleResponse.youngerPerson.age) {
      PeopleResponse.youngerPerson = person;
    }
    if (person.height > PeopleResponse.tallerPerson.height) {
      PeopleResponse.tallerPerson = person;
    }
    PeopleResponse.ageProm += person.age;
    PeopleResponse.heightProm += person.height;
  });

  PeopleResponse.ageProm = Math.round(PeopleResponse.ageProm / people.length);
  PeopleResponse.heightProm = Math.round(PeopleResponse.heightProm / people.length);

  return PeopleResponse;
}

module.exports = peopleInformation;
