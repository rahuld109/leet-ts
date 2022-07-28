function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const newList = new ListNode();
  let head = newList;
  
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  
  if (l1 !== null) {
    head.next = l1;
  } else if (l2 !== null) {
    head.next = l2;
  }
  
  return newList.next;
};
