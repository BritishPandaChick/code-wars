function solution(str, ending) {
    return str.endsWith(ending);
}

const solution = (str, ending) => str.substr(str.length-ending.length) === ending;

Test.assertEquals(solution('abcde', 'cde'), true)
Test.assertEquals(solution('abcde', 'abc'), false)