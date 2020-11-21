class MaxBagsReachedException extends Error {
  constructor() {
    super('Max bags reached');
  }
}

interface ContainerInterface {
  add(item: Item): never | void;
  getCapacity(): number;
}

// Abstract class, maybe?
class Container implements ContainerInterface {
  private items: Item[];
  constructor() {
    this.items = [];
  }

  add(item: Item) {
    if (this.items.length >= this.getCapacity()) {
      throw new MaxBagsReachedException();
    }

    this.items.push(item);
  }

  getCapacity(): number {
    return 0;
  }
}

class BackPack extends Container {
  getCapacity() {
    return 8;
  }
}

class Bag extends Container {
  getCapacity() {
    return 4;
  }
}

class Item {
  private name: string;
  private category: string;

  constructor(name: string, category: string) {
    this.name = name;
    this.category = category;
  }

  toString() {
    return `Item with name ${this.name} has category ${this.category}`;
  }
}

class Player {
  private bag: ContainerInterface;
  private bags: ContainerInterface[];

  constructor(bag: ContainerInterface, bags: ContainerInterface[]) {
    this.bag = bag;
    this.bags = bags;
  }

  pickItem(item: Item) {
    try {
      this.bag.add(item);
      console.log(`${item.toString()} collected ON BAGPACK`);
    } catch (e) {
      if (e instanceof MaxBagsReachedException) {
        this.storeInNextAvailableBag(item);
      }
    }
  }

  storeInNextAvailableBag(item: Item): void {
    for (let index = 0; index < this.bags.length; index++) {
      const bag = this.bags[index];
      try {
        bag.add(item);
        console.log(`${item.toString()} collected ON A BAG`);
        break;
      } catch (error) {
        if (index === this.bags.length - 1) {
          throw error;
        }
      }
    }
  }
}

const $button = document.getElementById('saveItem');
const $error = document.getElementById('error');
const player = new Player(new BackPack(), [new Bag(), new Bag(), new Bag(), new Bag()]);
const ITEMS_CATEGORIES = ['clothes', 'weapons', 'herbs'];

$button.addEventListener('click', function () {
  const index = Math.round(Math.random() * (ITEMS_CATEGORIES.length - 1));
  const itemCategory = ITEMS_CATEGORIES[index];
  const item = new Item(Date.now().toString(), itemCategory);

  try {
    player.pickItem(item);
  } catch (e) {
    console.log(e);
    $error.innerHTML = e.toString();
    $error.style.display = 'block';
  }
});
