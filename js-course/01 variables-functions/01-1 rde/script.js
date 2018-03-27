// Code goes here

function rde(source) {
    const len = source.length;

    if (len === 0) {
        return "";
    }

    let archived = source[0];
    let curLetter = source[0];
    let countIdentical = 1;

    for (let i = 1; i < len; i++) {
        if (source[i] === curLetter) {
            countIdentical++;
        } else {
            if (countIdentical > 1) {
                archived += countIdentical;
            }
            countIdentical = 1;
            curLetter = source[i];
            archived += curLetter;
        }
    }
    if (countIdentical > 1) {
        archived += countIdentical;
    }

    return archived;
}

function rdeExtract(archived) {
    const len = archived.length;

    if (len === 0) {
        return "";
    }

    let source = "";
    let curLetter = archived[0];
    let countIdentical = "";

    for (let i = 1; i < len; i++) {
        if ( isNumeric(archived[i]) ) {
            countIdentical += archived[i];
        } else {
            source += generateIdenticalLetters(curLetter, +countIdentical);
            countIdentical = "";
            curLetter = archived[i];
        }
    }
    source += generateIdenticalLetters(curLetter, +countIdentical);


    function generateIdenticalLetters(letter, count) {
        count = count || 1;
        let identicalStr = "";
        for (let i = 0; i < count; i++) {
            identicalStr += letter;
        }

        return identicalStr;
    }

    function isNumeric(char) {
        return char >= '0' && char <= '9';
    }

    return source;
}
