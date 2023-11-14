function unroll(square) {
    const result = [];
    while (square.length > 0) {
        //move right
        result.push(...square.shift());

        //move down
        for (let i = 0; i < square.length - 1; i++) {
            result.push(square[i].pop());
        }

        //move left if there are elements in the current row
        if (square.length > 0) {
            result.push(...square.pop().reverse());
        }

        //move up if there are elements in the remaining row
        for (let i = square.length - 1; i >= 0; i--) {
            result.push(square[i].shift());
        }
    }
    return result;
}

module.exports = unroll;
