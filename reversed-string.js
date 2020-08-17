function solution(str){
    /* var splitStr = str.split("");
    var reverseStr = splitStr.reverse();
    var joinStr = reverseStr.join("");
    return joinStr; */

    //Refactored code 
    str = str.split("").reverse().join("");
    return str;
}

console.log(solution('world'));