import {Struct} from "./types/Struct.js";
import {U8} from "./types/U8.js";
import {U16} from "./types/U16.js";
import {FixedAsciiString} from "./types/FixedAsciiString.js";
import {Tuple} from "./types/Tuple.js";
import {TypedArray} from "./types/TypedArray.js";

const Color = Tuple(U8, U8, U8);
export const Person = new Struct({
    age: U16,
    id: U16,
    firstName: FixedAsciiString(8),
    lastName: FixedAsciiString(8),
    color: Color
})

export const PersonArray = new TypedArray(Person, 1e5);
// console.log(PersonArray)