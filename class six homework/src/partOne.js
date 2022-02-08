function Product(propertyName, category, hasDiscount, price) {
  (this.propertyName = propertyName),
    (this.category = category),
    (this.hasDiscount = hasDiscount),
    (this.price = price);
}

let products = [
  new Product("Ford", "Car", true, 2500),
  new Product("Pizza", "Food", false, 250),
  new Product("Lenovo", "Laptop", false, 500),
  new Product("Adobe", "Software", true, 100),
  new Product("Oreo", "Food", false, 10),
  new Product("Chips", "Food", true, 5),
  new Product("Nike", "Shoes", true, 50),
  new Product("Star Wars", "Movie", false, 14),
  new Product("Pepsi", "Beverage", false, 2),
  new Product("Dove", "Skin Care", false, 7),
  new Product("Apple", "Technology", false, 140),
  new Product("DisneyPlus", "Entertainment", true, 25),
  new Product("Netflix", "Entertainment", false, 23),
  new Product("Nvidia", "Technology", true, 190),
  new Product("Sony", "TV", true, 320),
];
console.log("==Greater than 20==");
products
  .filter((s) => s.price > 20)
  .forEach((s) => console.log(s.propertyName));

console.log("==Food with discount==");
products
  .filter((s) => s.category == "Food" && s.hasDiscount == true)
  .forEach((food) => console.log(food.propertyName));

console.log("==Sum of discount products==");
let allPrices = products
  .filter((s) => s.hasDiscount == true)
  .map((s) => s.price);
let avg =
  allPrices.reduce((sum, price) => (sum += price), 0) / allPrices.length;
console.log(parseInt(avg));

console.log("==Name and price with vowel==");
let vowel = ["A", "E", "I", "O", "U"];
products
  .filter(
    (s) => vowel.indexOf(s.propertyName[0]) !== -1 && s.hasDiscount == false
  )
  .forEach((s) => console.log(`${s.propertyName} ${s.price}`));

console.log("==Price sorting==");
let arr = [];
let newProducts = products
  .filter((s) => arr.push(s))
  .sort((n1, n2) => n1.price - n2.price)
  .forEach((s) => console.log(`${s.propertyName} ${s.price}`));
