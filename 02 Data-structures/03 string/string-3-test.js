'use strict';

describe("Усекаем строку до N сиволов", function() {
    it("Усекаем строку 'Вот, что мне хотелось бы сказать на эту тему:' до 20 символов и добавляем ...", function() {
        assert.equal(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20), 'Вот, что мне хоте...');
    });

    it("Усекаем строку 'Всем привет!' до 20 символов, строка не изменится", function() {
        assert.equal(truncate('Всем привет!', 20), 'Всем привет!');
    });

    it("Усекаем строку 'Всем привет!' на отрицательное количество символов, строка не изменится", function() {
        assert.equal(truncate("Всем привет!", -20), "Всем привет!");
    });

    it("Вместо числа передадим тоже строку, изначальная строка не изменится", function() {
        assert.equal(truncate("Всем привет!", "Привет"), "Всем привет!");
    });

    it("Забудем передать число, изначальная строка не изменится", function() {
        assert.equal(truncate("Всем привет!"), "Всем привет!");
    });

    it("Ничего не передадим, вернется пустая строка", function() {
        assert.equal(truncate(), "");
    });
});