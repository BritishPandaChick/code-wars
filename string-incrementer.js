function incrementString(string){
    // return incrementedString
    var string = strng.replace(/[0-9]/g, '');
    var len = strng.length - string.length;
    var str = strng.slice(string.length) || "0";
    
    str = (parseInt(str) + 1).toString();
    
    while(str.length < len){
        str = "0" + str;
    }
    return string.concat(str);
}

// Solution Two
function incrementString(strng) {
    return strng.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
        return + d + 1 + ns.replace(/9/g, '0');
    });
}

Test.assertEquals(incrementString("foobar000"), "foobar001");
Test.assertEquals(incrementString("foo"), "foo1");
Test.assertEquals(incrementString("foobar001"), "foobar002");
Test.assertEquals(incrementString("foobar99"), "foobar100");
Test.assertEquals(incrementString("foobar099"), "foobar100");
Test.assertEquals(incrementString(""), "1");