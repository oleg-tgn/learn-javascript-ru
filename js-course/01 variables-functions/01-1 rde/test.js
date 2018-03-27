describe("Проверяем работу функции архивирования rte", function() {
    it("Подаем на вход строку AAAAABBBCCCCCCC => получаем A5B3C7", function() {
        assert.equal(rde("AAAAABBBCCCCCCC"), "A5B3C7");
    });

    it("Подаем на вход строку ABC => получаем ABC", function() {
        assert.equal(rde("ABC"), "ABC");
    });

    it("Подаем на вход строку AAAAAAAAAA => получаем A10", function() {
        assert.equal(rde("AAAAAAAAAA"), "A10");
    });
});

describe("Проверяем работу функции разархивирования rdeExtract", function() {
    it("Подаем на вход строку A5B3C7 => получаем AAAAABBBCCCCCCC", function() {
        assert.equal(rdeExtract("A5B3C7"), "AAAAABBBCCCCCCC");
    });

    it("Подаем на вход строку ABC => получаем ABC", function() {
        assert.equal(rdeExtract("ABC"), "ABC");
    });

    it("Подаем на вход строку A10 => получаем AAAAAAAAAA", function() {
        assert.equal(rdeExtract("A10"), "AAAAAAAAAA");
    });
});
