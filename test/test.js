const { sum, subtract, multiply } = require('../mathUtils');

describe('Funciones matemáticas', () => {
  describe('Función sum', () => {
    test('debe sumar correctamente dos números positivos', () => {
      expect(sum(1, 2)).toBe(3);
    });

    test('debe sumar correctamente un número positivo y otro negativo', () => {
      expect(sum(5, -2)).toBe(3);
    });
  });

  describe('Función subtract', () => {
    test('debe restar correctamente dos números positivos', () => {
      expect(subtract(5, 2)).toBe(3);
    });

    test('debe restar correctamente un número positivo y otro negativo', () => {
      expect(subtract(5, -2)).toBe(7);
    });
  });

  describe('Función multiply', () => {
    test('debe multiplicar correctamente dos números positivos', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('debe multiplicar correctamente un número positivo y otro negativo', () => {
      expect(multiply(5, -2)).toBe(-10);
    });
  });
});
