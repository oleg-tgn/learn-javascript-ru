'use strict';

describe("Делаем первую букву заглавной", function() {
    it("Меняем 'тест' на 'Тест'", function() {
        assert.equal(ucFirst('тест'), 'Тест');
    });

    it("Не должно поменяться 'Тест' на 'Тест'", function() {
        assert.equal(ucFirst('Тест'), 'Тест');
    });

    it("Для пустой строки", function() {
        assert.equal(ucFirst(''), '');
    });

    it("Для одного символа", function() {
        assert.equal(ucFirst('а'), 'А');
    });
});