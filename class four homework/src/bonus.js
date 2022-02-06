function myFunc(num) {
  if (num == 0) {
    return 1;
  } else {
    console.log(num);
    return num * myFunc(num - 1);
  }
}
console.log(myFunc(5));
