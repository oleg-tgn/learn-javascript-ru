QUnit.test("Тест функции trim()", function( assert ) {
    assert.ok(trim(' test ') == 'test', 'обрезаем крайние пробелы');
    assert.ok(trim('                1            ') == "1", 'очень много пробелов по бокам');
    assert.ok(trim('                    24          ') == '24', 'пробелы и табы по бокам');
    assert.equal(trim(''), '', 'Пустая строка');
    assert.strictEqual(trim(' ][akep'), '][akep', "Должно быть ][акер")
});
