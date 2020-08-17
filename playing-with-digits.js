function digPow(n, p){
    let str = n.toString();
    let len = str.length;
    let result = 0;
    for(var i =  0; i < len; i++){
        var numberser = parseInt(str.charAt(i), 10);
        result += Math.pow(numberser, p + i);
    }
    var x = Math.pow(n,p);
    if(result === x){
        return p;
    } else if (result % n === 0) {
        return result / n;
    } else {
        return - 1;
    }
}

// Soluction 1 
function digPow(n, p){
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? - 1 : x / n;
}


//Solution 2
function digPow(n, p){
    var ans = ('' + n)
    .split('').map(function(d,i){return Math.pow(+d,i+p)})
    .reduce(function(s,v){return s+v}) / n
    return ans%1 ? -1 : ans
}

Test.assertEquals(digPow(89, 1), 1)
Test.assertEquals(digPow(92, 1), -1)
Test.assertEquals(digPow(46288, 3), 51)