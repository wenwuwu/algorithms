
/*
    LinkedListNode {
        var val;
        var next;
    };
*/

function findIdxOfSubList (list, sublist) {

    var idx = -1;

    while (list) {
        idx++;

        if (list.val === sublist.val) {
            var list2 = sublist.next;
            if (!list2) {
                return idx;
            }

            var listCopy = list.next;
            var found = false;
            while (list2) {
                if (!listCopy) {
                    return -1;
                }

                if (listCopy.val !== list2.val) {
                    found = true;
                    break;
                }

                list2 = list2.next;
                listCopy = listCopy.next;
            }

            if (!found)
                return idx;
        }

        list = list.next;
    }

    return -1;
}
