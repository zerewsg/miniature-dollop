
// function Car(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.isRunning = false;
  
//   this.startEngine = function() {
//       this.isRunning = true;
//       console.log("Двигатель " + this.brand + " " + this.model + " запущен");
//   };
  
//   this.stopEngine = function() {
//       this.isRunning = false;
//       console.log("Двигатель " + this.brand + " " + this.model + " остановлен");
//   };
  
//   this.getInfo = function() {
//       return this.brand + " " + this.model + " (" + this.year + "), двигатель: " + (this.isRunning ? "запущен" : "остановлен");
//   };
// }

// var myCar = new Car("Toyota", "Camry", 2020);
// console.log(myCar.getInfo());
// myCar.startEngine();
// console.log(myCar.getInfo());






// function Student(name, group) {
//   this.name = name;
//   this.group = group;
//   this.grades = [];
  
//   this.addGrade = function(grade) {
//       if (grade >= 1 && grade <= 5) {
//           this.grades.push(grade);
//           console.log("Оценка " + grade + " добавлена для " + this.name);
//       } else {
//           console.log("Оценка должна быть от 1 до 5");
//       }
//   };
  
//   this.getAverage = function() {
//       if (this.grades.length === 0) return 0;
//       var sum = this.grades.reduce(function(total, grade) {
//           return total + grade;
//       }, 0);
//       return sum / this.grades.length;
//   };
  
//   this.getInfo = function() {
//       return "Студент: " + this.name + ", Группа: " + this.group + ", Средний балл: " + this.getAverage().toFixed(2);
//   };
// }

// var student = new Student("Иван Иванов", "ГР-01");
// student.addGrade(4);
// student.addGrade(5);
// student.addGrade(3);
// console.log(student.getInfo());





// function BankAccount(owner) {
//   this.owner = owner;
//   this.balance = 0;
//   this.accountNumber = Math.floor(Math.random() * 1000000000);
  
//   this.deposit = function(amount) {
//       if (amount > 0) {
//           this.balance += amount;
//           console.log("Счёт пополнен на " + amount + ". Новый баланс: " + this.balance);
//       } else {
//           console.log("Сумма пополнения должна быть положительной");
//       }
//   };
  
//   this.withdraw = function(amount) {
//       if (amount > this.balance) {
//           console.log("Недостаточно средств на счету");
//       } else if (amount > 0) {
//           this.balance -= amount;
//           console.log("Со счёта снято " + amount + ". Новый баланс: " + this.balance);
//       } else {
//           console.log("Сумма снятия должна быть положительной");
//       }
//   };
  
//   this.getAccountInfo = function() {
//       return "Владелец: " + this.owner + ", Номер счёта: " + this.accountNumber + ", Баланс: " + this.balance;
//   };
// }

// var account = new BankAccount("Петр Петров");
// account.deposit(1000);
// account.withdraw(300);
// console.log(account.getAccountInfo());





// function Product(name, price) {
//   this.name = name;
//   this.price = price;
//   this.discount = 0;
  
//   this.getFinalPrice = function() {
//       return this.price * (1 - this.discount / 100);
//   };
  
//   this.setDiscount = function(newDiscount) {
//       if (newDiscount >= 0 && newDiscount <= 100) {
//           this.discount = newDiscount;
//           console.log("Скидка установлена на " + newDiscount + "%");
//       } else {
//           console.log("Скидка должна быть в диапазоне от 0 до 100%");
//       }
//   };
  
//   this.getInfo = function() {
//       return "Товар: " + this.name + ", Цена: " + this.price + ", Скидка: " + this.discount + "%, Итоговая цена: " + this.getFinalPrice().toFixed(2);
//   };
// }

// // Пример использования
// var product = new Product("Молоко", 80);
// product.setDiscount(10);
// console.log(product.getInfo());