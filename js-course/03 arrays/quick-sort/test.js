describe("Проверяем функцию сравнения массивов", () => {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [1, 2, 3];
    let arr4 = [1, 2, 3];
    let arr5 = [1, 2, 3, 4];
    let arr6 = [1, 2, 3, 5];

    it("Сравним два пустых массива", () =>
        assert.isTrue(arrEqual(arr1, arr2))
    );

    it("Сравним пустой и заполненный массив", () =>
        assert.isFalse(arrEqual(arr1, arr3))
    );

    it("Сравним два одинаковых массива", () =>
        assert.isTrue(arrEqual(arr3, arr4))
    );

    it("Сравним массив сам с собой", () =>
        assert.isTrue(arrEqual(arr3, arr3))
    );

    it("Сравним два одинаковых до определенного момента массива", () =>
        assert.isFalse(arrEqual(arr5, arr6))
    );
});

describe("Проверяем сортировку", () => {
    let arr1 = [2, 1];
    let res1 = [1, 2];

    let arr2 = [2, 1, 3];
    let res2 = [1, 2, 3];

    let arr3 = [1, 2, 3];
    let res3 = [1, 2, 3];

    let arr4 = [5, 2, 1, 3, 4];
    let res4 = [1, 2, 3, 4, 5];

    let arr5 = [2, 2, 1, 1];
    let res5 = [1, 1, 2, 2];

    //QSort(arr1);
    QSort(arr2);
    //QSort(arr3);
    //QSort(arr4);
    //QSort(arr5);


    it("Сортируем массив [2, 1] => [1, 2]", () =>
        assert.isTrue(arrEqual(arr1, res1))
    );

    it("Сортируем массив [2, 1, 3] => => [1, 2, 3]", () =>
        assert.isTrue(arrEqual(arr2, res2))
    );

    it("Сортируем массив который уже отсортирован [1, 2, 3] => [1, 2, 3]", () =>
        assert.isTrue(arrEqual(arr3, res3))
    );

    it("Сортируем массив [5, 2, 1, 3, 4] => [1, 2, 3, 4, 5]", () =>
        assert.isTrue(arrEqual(arr4, res4))
    );

    it("Сортируем массив c повторяющимися элементами [2, 2, 1, 1] => [1, 1, 2, 2]", () =>
        assert.isTrue(arrEqual(arr5, res5))
    );
});