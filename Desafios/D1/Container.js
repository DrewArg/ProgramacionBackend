class Container {
  static array = [];

  constructor() {}

  save(object) {
    Container.array.push(object);
  }

  getById(number) {
    if (Container.array[number] == null) {
      return null;
    } else {
      return Container.array[number];
    }
  }

  getAll() {
    return Container.array;
  }

  deleteById(number) {
    if (Container.array[number] != null) {
      Container.array.splice(number,1);
    }
  }

  deleteAll() {
    while (Container.array.length > 0) {
      Container.array.pop();
    }
  }
}

const c = new Container();

c.save("a");
c.save("b");
c.save("c");
c.save("d");
c.save("e");

console.log(`getAll: ${c.getAll()}`);
console.log(`getById (4): ${c.getById(4)}`);
c.deleteById(2);
console.log("deleteById (2)");
console.log(`getAll: ${c.getAll()}`);
c.deleteAll();
console.log("deleteAll ");
console.log(`getAll: ${c.getAll()}`);
