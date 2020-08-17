function findNb(m){
    var sum = 0;
    for (n=0; sum < m; n++){
        sum = Math.pow(n*(n+1), 2) / 4;
    } if (sum === m) return n - 1;
    else return (-1);
}

Test.describe("Basic tests",function() {
    Test.assertEquals(findNb(4183059834009), 2022)
    Test.assertEquals(findNb(24723578342962), -1)
    Test.assertEquals(findNb(135440716410000), 4824)
    Test.assertEquals(findNb(40539911473216), 3568)
});