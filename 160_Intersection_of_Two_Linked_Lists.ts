function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let [length1, length2, h1, h2] = [0, 0, headA, headB];
  while (h1 || h2) {
    if (h1) {
      length1++;
      h1 = h1.next;
    }
    if (h2) {
      length2++;
      h2 = h2.next;
    }
  }

  if (length1 >= length2) {
    [h1, h2] = [headA, headB];
  } else {
    [h1, h2] = [headB, headA];
  }
  let count = 1;

  while (count <= Math.abs(length1 - length2)) {
    h1 = h1.next;
    count++;
  }

  while (h1 && h2) {
    if (h1 == h2) return h1;
    h1 = h1.next;
    h2 = h2.next;
  }
  return null;
}
