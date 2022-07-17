// 螺旋矩阵
var generateMatrix = function(n) {
    var loop = Math.floor(n / 2)
    var startRow = 0, startCol = 0, row = 0, col = 0, count = 1, offset = 1
    var res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    while(loop--) {
        row = startRow
        col = startCol

        for(;col < startCol + n - offset; col++) {
            res[row][col] = count
            count++
        }

        for(;row < startRow + n - offset; row++) {
            res[row][col] = count
            count++
        }

        for(;col > startCol; col--) {
            res[row][col] = count
            count++
        }

        for(;row > startRow; row--) {
            res[row][col] = count
            count++
        }

        offset += 2

        startRow++
        startCol++
    }

    if( n % 2 == 1) {
        var mid = Math.floor(n / 2)
        res[mid][mid] = count
    }

    return res
};