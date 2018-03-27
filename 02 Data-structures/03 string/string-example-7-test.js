'use strict';

describe("Ищем элемент в строке", function() {
    var str = "Моя тестовая строка";

    it("Ищем слово 'Моя', должно быть на позиции 0", function() {
        var target = "Моя";
        assert.equal(foundAllPositions(str, target)[0], 0);
    });

    it("Ищем слово 'тестовая', должно быть на позиции 4", function() {
        var target = "тестовая";
        assert.equal(foundAllPositions(str, target)[0], 4);
    });

    it("Ищем слово 'пример', должно быть на позиции -1", function() {
        var target = "пример";
        assert.equal(foundAllPositions(str, target)[0], -1);
    });

    describe("Ищем повторяющиеся строки", function() {
        var str2 = "Я по два раза не повторяю, не повторяю...";
        var target = "не повторяю";
        var result = foundAllPositions(str2, target);

        it("Ищем фразу 'не повторяю' на позиции 14", function() {
            assert.equal(result[0], 14);
        });

        it("Ищем фразу 'не повторяю' на позиции 27", function() {
            assert.equal(result[1], 27);
        });
    })
});