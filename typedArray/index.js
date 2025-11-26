import {Person, PersonArray} from "./scheme.js";

const bob = Person.create({
    age: 42,
    id: 531,
    firstName: 'Bob',
    lastName: 'Elton',
    color: [0xFF, 0x00, 0x00]
});

// console.log(bob.firstName, bob.color[0], bob.age);
// console.log(bob.buffer);

// console.log(new ArrayBuffer(Person.byteLength * 1e5))

const personArray = PersonArray.create([
    {
        age: 12,
        id: 1,
        firstName: 'Kek',
        lastName: 'Lol',
        color: [0xFF, 0x00, 0x00]
    },
    {
        age: 42,
        id: 2,
        firstName: 'Bla',
        lastName: 'Foo',
        color: [0xFF, 0x00, 0x00]
    },
    {
        age: 34,
        id: 3,
        firstName: 'Baz',
        lastName: 'Arr',
        color: [0xFF, 0x00, 0x00]
    },
    {
        age: 43,
        id: 123,
        firstName: 'Zip',
        lastName: 'Kroks',
        color: [0xFF, 0x00, 0x00]
    }
])


// console.log('values',bob.age)
console.log('personArray', personArray.buffer)