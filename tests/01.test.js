const  rango  = require("../ejercicios/condicionales/01.js");

describe('rango', function() {
    it('deberia mostrar que esta dentro del rango', function() {
        expect(rango(10,0,12)).toBe("Dentro del rango");
        expect(rango(12,0,14)).toBe("Dentro del rango");
        expect(rango(-9,-15,12)).toBe("Dentro del rango");
        expect(rango(10,9,12)).toBe("Dentro del rango");
        expect(rango(120,100,122)).toBe("Dentro del rango");
    });
    it('deberia mostrar que es Menor al minimo del rango', function() {
        expect(rango(-13,0,20)).toBe("Menor al minimo del rango");
        expect(rango(-110,0,102)).toBe("Menor al minimo del rango");
        expect(rango(-9,-1,10)).toBe("Menor al minimo del rango");
        expect(rango(34,44,332)).toBe("Menor al minimo del rango");
        expect(rango(44,56,100)).toBe("Menor al minimo del rango");
    });
    it('deberia mostrar que es Mayor al maximo del rango', function() {
        expect(rango(13,0,12)).toBe("Mayor al maximo del rango");
        expect(rango(110,0,102)).toBe("Mayor al maximo del rango");
        expect(rango(-9,-15,-12)).toBe("Mayor al maximo del rango");
        expect(rango(34,0,12)).toBe("Mayor al maximo del rango");
        expect(rango(44,0,42)).toBe("Mayor al maximo del rango");
    });
    it('deberia mostrar que es Es igual al maximo', function() {
        expect(rango(12,0,12)).toBe("Es igual al maximo");
        expect(rango(102,0,102)).toBe("Es igual al maximo");
        expect(rango(-12,-15,-12)).toBe("Es igual al maximo");
        expect(rango(12,0,12)).toBe("Es igual al maximo");
        expect(rango(42,0,42)).toBe("Es igual al maximo");
    });
    it('deberia mostrar que es Es igual al minimo', function() {
        expect(rango(0,0,12)).toBe("Es igual al minimo");
        expect(rango(0,0,102)).toBe("Es igual al minimo");
        expect(rango(-15,-15,-12)).toBe("Es igual al minimo");
        expect(rango(0,0,12)).toBe("Es igual al minimo");
        expect(rango(0,0,42)).toBe("Es igual al minimo");
    });
});