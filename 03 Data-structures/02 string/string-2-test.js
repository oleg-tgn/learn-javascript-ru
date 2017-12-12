'use strict';

describe("Проверяем строку на наличие спама, из слов „viagra“ или „XXX“ ", function() {
    it("Строка с фразой 'buy ViAgRA now'", function() {
        assert.isTrue(checkSpam('buy ViAgRA now'), true);
    });

    it("Строка с фразой 'free xxxxx'", function() {
        assert.isTrue(checkSpam('free xxxxx'));
    });

    it("Строка с фразой 'innocent rabbit'", function() {
        assert.isFalse(checkSpam("innocent rabbit"), false);
    });

});