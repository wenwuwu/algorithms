
function convert (x) {

    var b = ['o', 'a', 't', 'l', 's', 'i', 'n'];
    var ret = '';

    while (x > 0) {
        var m = x % 7;
        var n = Math.floor(x / 7);
        x = n;
        ret += b[m] + ret;
    }

    return ret;
}
