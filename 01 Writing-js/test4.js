'use strict';

describe("Тест", function() {
    before(function() { alert("Начало тестов"); });
    after(function() { alert("Конец тестов"); });

    beforeEach(function() { alert("Вход в тест"); });
    afterEach(function() { alert("Выход из тестов") });

    it('тест 1', function() { alert('1'); });
    it('тест 2', function() { alert('2'); });
});