const  letraDeDNI  = require("../ejercicios/condicionales/05.js");

describe('divisores', function() {
    it('debe mostrar DNI Invalido', function() {
        expect(letraDeDNI('ewewe')).toBe("DNI Invalido");
        expect(letraDeDNI('32nm332')).toBe('DNI Invalido');
    });
    it('debe mostrar Numero de DNI fuera de rango', function() {
        expect(letraDeDNI(999999999)).toBe('Numero de DNI fuera de rango');
        expect(letraDeDNI(-1)).toBe('Numero de DNI fuera de rango');
    });
    it('La letra calculada es incorrecta', function() {
        expect(letraDeDNI(23470465)).toBe('T');
        expect(letraDeDNI(23470466)).toBe('R');
        expect(letraDeDNI(23470467)).toBe('W');
        expect(letraDeDNI(23470468)).toBe('A');
        expect(letraDeDNI(23470469)).toBe('G');
        expect(letraDeDNI(23470470)).toBe('M');
        expect(letraDeDNI(23470471)).toBe('Y');
        expect(letraDeDNI(23470472)).toBe('F');
        expect(letraDeDNI(23470473)).toBe('P');
        expect(letraDeDNI(23470474)).toBe('D');
        expect(letraDeDNI(23470475)).toBe('X');
        expect(letraDeDNI(23470476)).toBe('B');
        expect(letraDeDNI(23470477)).toBe('N');
        expect(letraDeDNI(23470455)).toBe('J');
        expect(letraDeDNI(23470456)).toBe('Z');
        expect(letraDeDNI(23470457)).toBe('S');
        expect(letraDeDNI(23470458)).toBe('Q');
        expect(letraDeDNI(23470459)).toBe('V');
        expect(letraDeDNI(23470460)).toBe('H');
        expect(letraDeDNI(23470461)).toBe('L');
        expect(letraDeDNI(23470462)).toBe('C');
        expect(letraDeDNI(23470463)).toBe('K');
        expect(letraDeDNI(23470464)).toBe('E');
 
    });
});

