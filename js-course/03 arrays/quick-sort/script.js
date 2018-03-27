// Code goes here
function arrEqual(arr1, arr2) {
    if (arr1 === arr2) return true;
    if (arr1.length !== arr2.length) return false;

    for (let key in arr1) {
        if (arr1[key] !== arr2[key]) return false;
    }

    return true;
}

/*
 Алгоритм состоит из трёх шагов:

 1. Выбрать элемент из массива. Назовём его опорным.
 2. Разбиение: перераспределение элементов в массиве таким образом,
 что элементы меньше опорного помещаются перед ним, а больше или равные после.
 3. Рекурсивно применить первые два шага к двум подмассивам слева и
 справа от опорного элемента.
 Рекурсия не применяется к массиву, в котором только один или отсутствуют элементы.
 */

function QSort(arr) {
    QuickSort(arr, 0, arr.length - 1);
}

function QuickSort(arr, first, last) {
    if (last -  first < 1) return arr;

    // выбирем опорный элемент посередине
    let middle = Math.floor( (last - first) / 2 + first );
    let base = arr[middle];

    let i = first;
    let k = last;

    while ( i < k ) {
        while (arr[i] < base) i++;
        while (arr[k] >= base) k--;

        if (i < k) {
            let buf = arr[i];
            arr[i] = arr[k];
            arr[k] = buf;

            i++;
            k--;
        }
    }
    if (last - first === 1) return arr;

    QuickSort(arr, first, middle);
    QuickSort(arr, middle, last);

    return arr;
}
