export class Struct {

    constructor(scheme) {
        let totalLength = 0;

        this.scheme = new Map(  // Выбрана для того чтобы все ключи шли по порядку
            Object.entries(scheme).flatMap(([key, type]) => {
                const alignment = this.#getAlignment(totalLength, type.alignment ?? 1);

                const res = [];

                if(alignment !== 0) { // Добавляем выравнивание
                    res.push([
                        Symbol('Alignment'),
                        {
                            byteLength: alignment,
                            init() {
                                return {
                                    get: () => 0,
                                    set: (_val) => {}
                                }
                            }
                        }
                    ])
                    totalLength += alignment;
                }

                res.push([
                    key,
                    {
                        byteLength: type.byteLength,
                        init: type.init.bind(type)
                    }
                ])
                totalLength += type.byteLength;
                return res;
            })
        )

        this.byteLength = totalLength;

        console.log(this.scheme)
        console.log(this.byteLength)
    }

    create(data, buffer = new ArrayBuffer(this.byteLength), offset = 0) {
        const view = new StructView(buffer, this.byteLength, offset);

        this.scheme.forEach((type, key) => {
            const {get, set} = type.init(buffer, offset);

            if(typeof key !== 'symbol') {
                console.log(key, data[key])
                set(data[key]);

                Object.defineProperty(view, key, {
                    get,
                    set,
                    enumerable: true,
                    configurable: true
                })

                offset += type.byteLength;
            }
        })
        console.log('view', view)
        return view;
    }

    from(buffer, offset = 0) {
        const view = new StructView(buffer, this.byteLength, offset);

        this.scheme.forEach((type, key) => {
            const currentOffset = offset;
            offset += type.byteLength;

            let accessors;

            function init() {
                if (accessors == null) {
                    accessors = type.init(buffer, currentOffset);
                }

                return accessors;
            }

            if(typeof key !== 'symbol') {
                Object.defineProperty(view, key, {
                    get: () => init().get(),
                    set: (value) => {
                        init().set(value)
                    },
                    enumerable: true,
                    configurable: true
                })
            }
        })

        return view;
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

    #getAlignment(offset, size) {
        const reminder = offset % size;

        if(reminder === 0) {
            return 0;
        }

        return size - reminder; // Число которое нужно добавить к offset чтобы  оно стало кратным равно size
    }
}

class StructView { //Отображение структуры
    #buffer;
    #byteLength;
    #byteOffset;

    get buffer() {
        return this.#buffer;
    }

    get byteOffset() {
        return this.#byteOffset;
    }

    constructor(buffer, byteLength, offset) {
        this.#buffer = buffer;
        this.#byteLength = byteLength;
        this.#byteOffset = offset;
    }
}