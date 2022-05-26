function factorial(n) {
    //recursive method
    // if (n < 0){
    //     return 'NaN';
    // }
    // if (n == 0 || n == 1){
    //     return 1;    
    // }else{
    //     return n * factorial(n-1);
    // }

    //Loop method or iterative method
    if (n < 0)
        return 'NaN';
        
    if (n == 0 || n == 1)
        return 1;
    
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}
    
module.exports = factorial;

// Pair programming partner: ARAFAT MAGEZI
    