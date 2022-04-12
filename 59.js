// 螺旋矩阵
function routMatrix(n){

    var loop = Math.floor(n/2)
    var mid = Math.floor(n/2)
    var startX = 0, startY = 0, offset = 1, row = 0, col = 0
    var res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    var count = 1
    while(loop--){
        row = startY
        col = startX
        for(; col < startX + n - offset; col++){
            res[row][col] = count++
        }
        for(; row < startY + n - offset; row++){
            res[row][col] = count++
        }
        for(; col > startX; col--){
            res[row][col] = count++
        }
        for(; row > startY; row--){
            res[row][col] = count++
        }

        startX++
        startY++

        offset+=2
    }
    
    if(n %2 ==1){
        res[mid][mid] = count
    }
    return res
}
console.log(routMatrix(3))