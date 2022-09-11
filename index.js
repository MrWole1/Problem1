let factorial = (number) => {
    if(number == 1){
        return number
    }else {
        return number * factorial(number-1)
    }
}

let Problem1 = (gridSize) => {

    let n = 2 * gridSize
    let k = gridSize

    return factorial(n) / (factorial(k) * factorial(n-k))

}

console.log('The answer to problem 1 is ' + Problem1 (20));