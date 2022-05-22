function addStrings(num1: string, num2: string): string {
  let i: number = num1.length - 1,
    j: number = num2.length - 1,
    sum: number = 0,
    carry: number = 0,
    result: string = "";

  while (i >= 0 || j >= 0) {
    sum = carry;

    if (i >= 0) {
      sum += +num1.charAt(i--);
    }

    if (j >= 0) {
      sum += +num2.charAt(j--);
    }

    result = (sum % 10) + result;
    carry = ~~(sum / 10);
  }

  if (carry) {
    result = carry + result;
  }

  return result;
}
