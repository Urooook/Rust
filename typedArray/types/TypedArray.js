export class TypedArray {
    constructor(type, length) {
        this.byteLength = type.byteLength * length;
        this.length = length;
        this.type = type;
    }

    create(data, buffer = new ArrayBuffer(this.byteLength), offset = 0) {
        const view = new TypedArrayView(this.type, buffer, this.byteLength, offset);

        for(let i = 0; i < this.length && i < data.length; i++) {
            view.set(i, data[i]);
        }

        return view;
    }

    from(buffer = new ArrayBuffer(this.byteLength), offset = 0) {
        return new TypedArrayView(this.type, buffer, this.byteLength, offset);
    }

    init(buffer, offset) {
        let view = this.from(buffer, offset);

        return {
            get: () => view,
            set: (data) => {
                view = this.create(data, buffer, offset);
            }
        };
    }
}

export class TypedArrayView {
    #byteLength;
    #type;
    #buffer;
    #byteOffset

    get byteLength() {
        return this.#byteLength;
    }

    get buffer() {
        return this.#buffer;
    }

    get BYTES_PER_ELEMENT() {
        return this.#type.byteLength;
    }

    get byteOffset() {
        return this.#byteOffset;
    }
    constructor
    (type, buffer, byteLength, byteOffset) {
        this.#byteLength = byteLength;
        this.#buffer = buffer;
        this.#type = type;
        this.#byteOffset = byteOffset;
    }

    #init(index) {
        return this.#type.init(this.#buffer, this.#byteOffset + this.#type.byteLength * index);
    }

    get(index) {
        return this.#init(index).get();
    }

    set(index, value) {
        this.#init(index).set(value);
    }
}