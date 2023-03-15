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

function printListReverseIterator(list) {
  let curr = list;
  let array = [];
  while (curr) {
    array.push(curr.value);
    curr = curr.next;
  }

  array.reverse().forEach(x => console.log(x));
}

function printListReverseRecursive(list) {
  if (list.next) {
    printListReverseRecursive(list.next);
  }

  console.log(list.value);
}

printListReverseIterator(list);
printListReverseRecursive(list);
