let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListIterator(list) {
  let curr = list;
  while (curr) {
    console.log(curr.value);
    curr = curr.next;
  }
}

function printListRecursive(list) {
  console.log(list.value);

  if (list.next) {
    printListRecursive(list.next);
  }
}

printListIterator(list);
printListRecursive(list);
