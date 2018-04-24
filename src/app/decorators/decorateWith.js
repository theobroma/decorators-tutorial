function fluent(fn) {
  return function(...args) {
    fn.apply(this, args);
    return this;
  };
}

function decorateWith(decorator) {
  return (target, name, descriptor) => {
    descriptor.value = decorator.call(target, descriptor.value);
  };
}

class Person {
  @decorateWith(fluent)
  setName(first, last) {
    this.first = first;
    this.last = last;
  }
  @decorateWith(fluent)
  sayName() {
    console.log(this.first, this.last);
  }
}

const p = new Person();
p
  .setName('Jane', 'Doe')
  .sayName()
  .setName('John', 'Doe')
  .sayName();
