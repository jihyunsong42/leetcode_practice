var mergeTwoLists = function(list1, list2) { 

    let listNode = new ListNode();
    if (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            listNode.val = list1.val;
            list1 = list1.next;
        }
        else {
            listNode.val = list2.val;
            list2 = list2.next;
        }
        
        listNode.next = mergeTwoLists(list1, list2);
        return listNode;
    }
    else if (list1 == null && list2 != null) {
        listNode = list2;
        return listNode;
    }
    else if (list1 != null && list2 == null) {
        listNode = list1;
        return listNode;
    }
    else 
        return null;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let link1 = new ListNode(1, null);
link1.next = new ListNode(2, null);

let link2 = new ListNode(1, null);
link2.next = new ListNode(3, null);

console.log(mergeTwoLists(link1, link2));
// console.log(mergeTwoLists(link1, link2).val);
// console.log(mergeTwoLists(link1, link2).next.val);
// console.log(mergeTwoLists(link1, link2).next.next.val);
// console.log(mergeTwoLists(link1, link2).next.next.next.val);
// console.log(mergeTwoLists(link1, link2).next.next.next.next.val);

// expected:  [1, 1, 2, 3]
// output: [1, 1, 2, 0, 3]