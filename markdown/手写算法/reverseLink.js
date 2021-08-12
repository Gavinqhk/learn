function linkNode(val) {
    this.value = val;
    this.next = null;
}
linkNode.prototype.setNext = function (link) {
    this.next = link;
}

function reverseLink(head) {
    let curr = head;
    let prev = null;
    while(curr.next !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}