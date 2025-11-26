import {Struct} from "./Struct.js";

export const Tuple = (...types) => {
    const scheme = types.reduce((acc, type, i) => {
        acc[i] = type;
        return acc;
    }, {})

    return new Struct(scheme)
}