function arrayDiff(a, b) {
    if (b === undefined || a === undefined){
        return a;
    }
    
    var newArray = [];
    var merged = a.concat(b);
    
    merged.forEach(function(e){
      if(!b.includes(e)){
        newArray.push(e);
      }
    });
    
    return newArray;
}


//Solution Two
function array_diff(a,b){
    return a.filter(e => !b.includes(e));
}

//solution three
function array_diff(a,b){
    return a.filter(function(x){
        return b.indexOf(x) == -1;
    });
}

Test.describe("Sample tests", function() {
    Test.it("Should pass Sample tests", function() {
      Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
      Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
      Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
    });
  }); 