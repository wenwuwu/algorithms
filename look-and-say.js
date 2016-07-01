
function LookAndSay (start, n) {

    var len = start.length,
        ret = '';

    for (var i = 0; i < len; i++) {
        var s = start.charAt(i);
        var cnt = 1;

        while (++i < len && start.charAt(i) === s) {
            cnt++;
        }

        ret += cnt + s;
        i--;
    }

    if (--n === 0)
        return ret;
    else 
        return LookAndSay(ret, n);
}
