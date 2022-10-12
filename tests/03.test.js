import calificaciones from "../ejercicios/condicionales/03.js";

describe('calificaciones', function() {
    it('Calificacion Muy deficiente', function() {
        expect(calificaciones(0)).toBe("Muy deficiente");
        expect(calificaciones(1)).toBe("Muy deficiente");
        expect(calificaciones(2)).toBe("Muy deficiente");
    });
    it('Calificacion Insuficiente', function() {
        expect(calificaciones(3)).toBe("Insuficiente");
        expect(calificaciones(4)).toBe("Insuficiente");
    });
    it('Calificacion Suficiente', function() {
        expect(calificaciones(5)).toBe("Suficiente");
        expect(calificaciones(6)).toBe("Suficiente");
    });
    it('Calificacion Notable', function() {
        expect(calificaciones(7)).toBe("Bien");
        expect(calificaciones(8)).toBe("Bien");
    });
    it('Calificacion Sobresaliente', function() {
        expect(calificaciones(9)).toBe("Sobresaliente");
        expect(calificaciones(10)).toBe("Sobresaliente");
    });
    it('Calificacion Sobresaliente', function() {
        expect(calificaciones(12)).toBe("Calificacion invalida");
        expect(calificaciones(-10)).toBe("Calificacion invalida");
    });
});
  
