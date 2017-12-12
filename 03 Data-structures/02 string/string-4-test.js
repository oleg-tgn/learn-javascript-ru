'use strict';

describe("Извлекаем из строки число, если первый сивол, это символ валюты", function() {
    it("Извлекаем из строки '$120' значение 120", function() {
        assert.equal(extractCurrencyValue('$120'), 120);
    });

    it("Тут уже числа не будет '$$120' получаем NaN", function() {
        assert.isTrue(isNaN(extractCurrencyValue('$$120')));
    });

    it("Тут уже числа не будет '$' получаем NaN", function() {
        assert.isTrue(isNaN(extractCurrencyValue('$')));
    });

    it("Извлекаем из строки '$1.2' значение 1.2", function() {
        assert.equal(extractCurrencyValue('$1.2'), 1.2);
    });

    it("Извлекаем из строки '$1.2blabla' значение 1.2", function() {
        assert.equal(extractCurrencyValue('$1.2blabla'), 1.2);
    });

    it("Передадим пустую строку '' значение NaN", function() {
        assert.isTrue(isNaN(extractCurrencyValue('')));
    });
});
