function createArray(items) {
  return new Array().concat(items);
}

let myNumArr = createArray([100, 200, 300]);
let myStrArr = createArray(['Hello', 'World']);
let stringOrNumber = createArray([100, 'Hello']);

myNumArr.push(400);
myNumArr.push('Hi');

myStrArr.push('Hello TypeScript');
myStrArr.push(500);

stringOrNumber.push(true);

function isNumber(x) {
  return typeof x === 'number';
}

function isString(x) {
  return typeof x === 'string';
}

console.group('Type validation');
console.log('myNumArr contains only numbers:', myNumArr.every(isNumber));
console.log('myStrArr contains only strings', myStrArr.every(isString));
console.log(
  'stringOrNumber contains only string or number:',
  stringOrNumber.every((x) => isString(x) || isNumber(x))
);
console.groupEnd();

// Display Tupe value
function displayTupeType([index, value], indexAsType, valueAsType) {
  console.group('Tuple type validation');
  console.log('index is', typeof index, 'and match with his type: ', typeof index === indexAsType);
  console.log('value is', typeof value, 'and match with his type: ', typeof value === valueAsType);
  console.groupEnd();
}

displayTupeType([1, 'Hi'], 'number', 'number'); // number, string

class Manager {
  constructor() {
    this.items = [];
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  hasSameType() {
    const firstItemType = typeof this.items[0];

    if (firstItemType === 'undefined') {
      throw new Error('Push a new item before call this method');
    }

    return this.items.every((item) => typeof item === firstItemType);
  }

  getItems() {
    return this.items;
  }
}

const manager = new Manager();
manager.addItem(1);
manager.addItem('hi');
console.group('Manager class type validation');
console.log('All items has same type', manager.hasSameType());
console.groupEnd();

const hackedManager = new Manager();
hackedManager.addItem(1);
hackedManager.addItem('two');
hackedManager.addItem(3);

console.group('Hacked Manager should contains a one string');
console.log('All items has same type > should be false. It is? ', manager.hasSameType());
console.log('Founded a string:', manager.getItems().some(isString));
console.groupEnd();
