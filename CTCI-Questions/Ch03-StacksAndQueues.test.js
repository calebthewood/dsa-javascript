const { Stack, Queue } = require('./Ch03-StacksAndQueues');

function buildStructure(size, ds) {
  let output;
  if (ds === "stack") {
    output = new Stack();
    for (let i = 1; i <= size; i++) output.push(i);
  }
  if (ds === "queue") {
    output = new Queue();
    for (let i = 1; i <= size; i++) output.add(i);
  }
  return output;
}

describe("Stack Data Structure", () => {
  const stack = buildStructure(9, "stack"); // a stack of ints ordered 1..9
  test("Should print list from 1,2,3..9", () => {
    expect(stack.print()).toEqual("9,8,7,6,5,4,3,2,1");
    expect(stack.size).toEqual(9);
    expect(stack.top.val).toEqual(9);
  });
  test("Should push 10 onto stack", () => {
    expect(stack.push(10)).toEqual(10);
    expect(stack.size).toEqual(10);
    expect(stack.top.val).toEqual(10);
    expect(stack.print()).toEqual("10,9,8,7,6,5,4,3,2,1");
  });
  test("Should pop 10 from stack", () => {
    expect(stack.pop()).toEqual(10);
    expect(stack.size).toEqual(9);
    expect(stack.top.val).toEqual(9);
    expect(stack.print()).toEqual("9,8,7,6,5,4,3,2,1");
  });
  test("Should peak at top node", () => {
    expect(stack.peak()).toEqual(9);
    expect(stack.size).toEqual(9);
    expect(stack.top.val).toEqual(9);
    expect(stack.print()).toEqual("9,8,7,6,5,4,3,2,1");
  });
  test("Should return false when not empty", () => {
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size).toEqual(9);
    expect(stack.top.val).toEqual(9);
    expect(stack.print()).toEqual("9,8,7,6,5,4,3,2,1");
  });
  test("Should return true when empty", () => {
    while (stack.size) stack.pop();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size).toEqual(0);
    expect(stack.top).toEqual(null);
  });
});

describe("Stack Queue Structure", () => {
  const queue = buildStructure(9, "queue"); // a stack of ints ordered 1..9
  test("Should print list from 1,2,3..9", () => {
    expect(queue.print()).toEqual("1,2,3,4,5,6,7,8,9");
    expect(queue.size).toEqual(9);
    expect(queue.first.val).toEqual(1);
  });
  test("Should push 10 onto queue", () => {
    expect(queue.add(10)).toEqual(10);
    expect(queue.size).toEqual(10);
    expect(queue.first.val).toEqual(1);
    expect(queue.print()).toEqual("1,2,3,4,5,6,7,8,9,10");
  });
  test("Should pop 10 from queue", () => {
    expect(queue.remove()).toEqual(1);
    expect(queue.size).toEqual(9);
    expect(queue.first.val).toEqual(2);
    expect(queue.print()).toEqual("2,3,4,5,6,7,8,9,10");
  });
  test("Should peak at first node", () => {
    expect(queue.peak()).toEqual(2);
    expect(queue.size).toEqual(9);
    expect(queue.first.val).toEqual(2);
    expect(queue.print()).toEqual("2,3,4,5,6,7,8,9,10");
  });
  test("Should return false when not empty", () => {
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size).toEqual(9);
    expect(queue.first.val).toEqual(2);
    expect(queue.print()).toEqual("2,3,4,5,6,7,8,9,10");
  });
  test("Should return true when empty", () => {
    while (queue.size) queue.remove();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size).toEqual(0);
    expect(queue.first).toEqual(null);
  });
});
