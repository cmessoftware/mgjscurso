const  divisor  = require("../ejercicios/condicionales/04.js");

describe('divisores', function() {
    it('a es divisor de b', function() {
        expect(divisor(30,5)).toBe(0);
        expect(divisor(305,5)).toBe(0);
        expect(divisor(49,7)).toBe(0);
        expect(divisor(57,13)).toBe(0);
        expect(divisor(202,2)).toBe(0);
    });
    it('a no es divisor de b', function() {
        expect(divisor(25,3)).toBe(1);
        expect(divisor(10,3)).toBe(1);
        expect(divisor(80,7)).toBe(3);
        expect(divisor(77,10)).toBe(7);
        expect(divisor(33,7)).toBe(4);
    });
    it('El resto de a y b no es 1', function() {
        expect(divisor(25,3)).toBe(1);
        expect(divisor(10,3)).toBe(1);
        expect(divisor(82,9)).toBe(1);
        expect(divisor(78,11)).toBe(1);
        expect(divisor(33,8)).toBe(1);
    });
});