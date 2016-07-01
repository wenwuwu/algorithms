
var algs = algs || {};

(function (ns) {

    var arr = [];
    var book = {};
    var cnt = 0;

    var init = function () {
        arr = [];
        book = {};
        cnt = 0;
    };

    var dfs = function (step, n) {

        if (step === n) {
            // arr.shift();
            console.log(arr);

            if (n > 0)
                cnt++;

            return;
        }

        for (var i = 0; i < n; i++) {
            if (!book[i]) {
                arr[step] = i;
                book[i] = true;
                dfs(step + 1, n);
                book[i] = false;
            }
        }
    };

    var allPerm = function (n) {
        init();

        dfs(0, n);

        console.log(cnt);
    }

    ns.allPerm = allPerm;

}) (algs);
