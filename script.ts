enum Colors {
  RED = "red",
  BLUE = "blue",
  PURPLE = "purple",
  GREEN = "green",
  YELLOW = "yellow",
}

type fruits = {
  name: string;
  size: string;
  flavor: string;
  colors: Colors;
  print(): void;
};

const banana: fruits = {
  name: "Banana",
  size: "small",
  flavor: "sweet",
  colors: Colors.YELLOW,
  print() {
    console.log(`The fruit is ${this.name}, it is ${this.size} in size
        and it is ${this.flavor}, it is color ${this.colors}.`);
  },
};

const apple: fruits = {
  name: "Apple",
  size: "medium",
  flavor: "crisp and tart",
  colors: Colors.RED,
  print() {
    console.log(`The fruit is ${this.name}, it is ${this.size} in size
        and it is ${this.flavor}, it is color ${this.colors}.`);
  },
};

const grape: fruits = {
  name: "Grapes",
  size: "small",
  flavor: "sweet",
  colors: Colors.PURPLE,
  print() {
    console.log(`The fruit is ${this.name}, it is ${this.size} in size
        and it is ${this.flavor}, it is color ${this.colors}.`);
  },
};

banana.print();
apple.print();
grape.print();
