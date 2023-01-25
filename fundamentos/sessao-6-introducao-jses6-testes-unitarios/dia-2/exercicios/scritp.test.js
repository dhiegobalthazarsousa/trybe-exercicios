const myRemove = require('./script.js');

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;
describe('remove an array item', () => {
    it('remove 3 of array [1, 2, 3, 4] returns [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4],3)).toEqual([1,2,4]);
    });
});

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
describe('remove an array item', () => {
    it('remove 3 of array [1, 2, 3, 4] do not returns [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4],3)).not.toEqual([1,2,3,4]);
    });
});

