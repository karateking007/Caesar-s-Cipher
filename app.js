function rot13(str) {

    var ans = [];
    var finalAns;
    var code = [];

    for (let i = 0; i < str.length; i++) {
        code.push(str.charCodeAt(i));
    }

    for (let i = 0; i < code.length; i++) {
        if (code[i] < 78 && code[i] >= 65 && code[i] !== 32) {
            code[i] += 13;
        } else if (code[i] >= 78 && code[i] !== 32) {
            code[i] -= 13;
        }
    }

    for (let i = 0; i < code.length; i++) {
        ans.push(String.fromCharCode(code[i]));
    }

    finalAns = ans.join("");

    return finalAns;
}

rot13("OEBJA");