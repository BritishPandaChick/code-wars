function XO(str){
    var totalX = str.split('').filter(char => /x/gi.test(char)).length;
    var totalO = str.split('').filter(char => /o/gi.test(char)).length;

    return totalX === totalO;
}

console.log(XO("ooxx"));