export const U8 = {
    get byteLength() {
        return 1;
    },

    init(buffer, offset) {
        const arr = new Uint8Array(buffer, offset, 1);
        console.log('arr',buffer, offset, arr[0])
        return {
            get: () => arr[0],
            set: (val) => {
                console.log('valU8', val)
                arr[0] = val
            }
        }
    }
}