// You should implement your task here.

module.exports =
    function towelSort(matrix) {
        if (typeof matrix === 'undefined' || matrix.length === 0)
            return [];
        else {
            const newArr = matrix.map((el, index) =>
                (index % 2 === 0) ? el : el.reverse())

            return [].concat(...newArr);

            // .join().split(',').map((el) => +el)
        }
    }
