const stack = require('../src/stack');

test('Push should add an element to the top of the stack', () => {
    stack.push(5);
    expect(stack.peek()).toBe(5);
});

test('Pop should remove and return the top element of the stack', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
});

test('Peek should return the top element of the stack without removing it', () => {
    expect(stack.peek()).toBeUndefined();
});