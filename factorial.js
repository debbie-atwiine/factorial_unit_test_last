function factorial(n) {
        // base case
    if (n == 0 || n == 1){
        return 1;
        //recursive method
    }else if(n == 2){
        return 2;
    }else{
        return n * factorial(n-1);
    }
}

    // Pair programming partner: ARAFAT MAGEZI
    
    module.exports = factorial;