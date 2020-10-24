// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];

    return matrix.reduce((acc, val, idx) => {
        if (idx % 2 === 0) {
            val.sort((i, j) => i - j);
        } else {
            val.sort((i, j) => j - i);
        }
        return acc.concat(val);
    }, []);
};
