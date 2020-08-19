function bouncingBall(h,  bounce,  window) {
    // your code here
    var count = 0;
    
    if(h > 0 && bounce > 0 && bounce < 1 && window < h){
      count = 1;
    } else {
      return -1;
    }
    h = h * bounce;
    while(h > window){
      count += 2;
      h = h * bounce;
    }
    return count;
}

//Solution Two
function bouncingBall(h, bounce, window){
    var rebuonds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds += 2, h *= bounce;
    return rebounds;
}

describe("Tests", function(){
    it ("test1", function(){
         Test.assertEquals(bouncingBall(3.0, 0.66, 1.5), 3);
    });
    
    it ("test2", function(){
         Test.assertEquals(bouncingBall(30.0, 0.66, 1.5), 15);
    });
    
});