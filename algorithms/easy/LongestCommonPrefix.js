var mergeTwoLists = function(list1, list2) {
    console.log(list1.val);
    console.log(list2.val);
    console.log("-------");
    list1.next = list1;
    list2.next = list2;
    mergeTwoLists(list1, list2);
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let link1 = new ListNode(1, null);
link1.next = new ListNode(2, null);

let link2 = new ListNode(1, null);
link2.next = new ListNode(3, null);

mergeTwoLists(link1, link2);
