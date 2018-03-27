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
    let stack = [{
        first: 0,
        last: arr.length - 1
    }];

    while (stack.length) {
        let range = stack.pop();

        let first = range.first;
        let last = range.last;

        if (last -  first < 1) continue;

        let middle = Math.floor( (last - first) / 2 + first );

        QuickSortNoRecursion(arr, first, last);

        if (last - first === 1) continue;

        stack.push({ first: middle, last: last });
        stack.push({ first: first, last: middle });
    }
}

function QuickSortNoRecursion(arr, first, last) {
    // выбирем опорный элемент посередине
    let middle = Math.floor( (last - first) / 2 + first );
    let base = arr[middle];

    let i = first;
    let k = last;

    while ( i < k ) {
        while (arr[i] < base) i++;
        while (arr[k] >= base) j--;

        if (i < k) {
            let buf = arr[i];
            arr[i] = arr[k];
            arr[k] = buf;

            i++;
            k--;
        }
    }

    return arr;
}
