class PiggyBank {
  #balance = 0;

  put(amount) {
    if (amount <= 0) {
      console.log("Некорректная сумма");
      return;
    }
    this.#balance += amount;
  }

  take(amount) {
    if (amount > this.#balance) {
      console.log("Недостаточно средств");
      return;
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const myBank = new PiggyBank();

myBank.put(100);
myBank.put(50);
myBank.take(30);
console.log(myBank.getBalance()); 

myBank.take(1000); 
myBank.put(-5);   


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} издаёт звук.`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} говорит: Мяу`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} говорит: Гав`);
  }

  fetch() {
    console.log(`${this.name} принёс палку.`);
  } 
}


const animals = [
  new Animal("Какое-то существо"),
  new Cat("Мурзик"),
  new Cat("Барсик"),
  new Dog("Бобик")
];

animals.forEach(animal => animal.speak());

const dog = animals.find(animal => animal instanceof Dog);
if (dog) {
  dog.fetch();
}
class Task {
  constructor(title) {
    this.title = title;
    this.done = false;
  }

  complete() {
    this.done = true;
  }

  toString() {
    return `${this.done ? '[x]' : '[ ]'} ${this.title}`;
  }
}

class TodoList {
  constructor() {
    this.tasks = []; 
  }

  add(title) {
    const newTask = new Task(title);
    this.tasks.push(newTask);
  }

  complete(index) {
    if (this.tasks[index]) {
      this.tasks[index].complete();
    } else {
      console.log("Задача с таким индексом не найдена");
    }
  }

  print() {
    this.tasks.forEach(task => console.log(task.toString()));
  }

  countDone() {
    return this.tasks.filter(task => task.done).length;
  }
}

const myTodo = new TodoList();
myTodo.add("Купить хлеб");
myTodo.add("Помыть посуду");
myTodo.add("Сделать домашку");

myTodo.complete(0);

myTodo.print();


console.log(`Выполнено задач: ${myTodo.countDone()}`); 
