const products = [
  { name: 'Apel', price: 10000, stock: 10 },
  { nama: 'Jeruk', price: 15000, stock: 15 },
  { name: 'Anggur', price: 20000, stock: 20 },
];

for (let item of products) {
  console.log(`${item.name}: Rp.${item.price} (${item.stock} Stock)`);
}

// > CLASS
// Cetakan untuk membuat object dengan property yg sama

class Products {
  name = '';
  price = 0;
  stock = 0;

  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

const product1 = new Products('Apel', 10000, 10);
const product2 = new Products('Jeruk', 15000, 15);
console.log(product1);
console.log(product2);

/*
    Challenge. 
    Disebuah supermarket terdapat banyak sekali produk dengan berbagai kategori, seperti snack, pakaian, dan elektronik. 
    01 - Tentukan entitas/property apa saja yang terdapat di tiap-tiap kategori produk

    Snack
    - name
    - price
    - stock
    - flavour
    - weight
    - expiryDate
    - discount
    - brand

    Pakaian
    - name
    - price
    - stock 
    - brand
    - fitType
    - fabric
    - color
    - discount
    - size

    Elektronik
    - name
    - price
    - stock
    - brand
    - discount 
    - weight
    - watt
    - color
    - size
    - year
    - guarantee 

    02 - Buatkan class untuk tiap-tiap kategori produk
*/

class Snack {
  constructor(
    name,
    price,
    stock,
    flavour,
    weight,
    expiryDate,
    discount,
    brand
  ) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.flavour = flavour;
    this.weight = weight;
    this.expiryDate = expiryDate;
    this.discount = discount;
    this.brand = brand;
  }
}

class Clothes {
  constructor(
    name,
    price,
    stock,
    brand,
    fitType,
    fabric,
    color,
    discount,
    size
  ) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.brand = brand;
    this.fitType = fitType;
    this.fabric = fabric;
    this.color = color;
    this.discount = discount;
    this.size = size;
  }
}

// Inheritance (Pewarisan Property)

class BaseProduct {
  name = '';
  prices = 0;
  stock = 0;
  discount = 0;
  brand = '';

  constructor(name, prices, stock, brand, discount) {
    this.name = name;
    this.prices = prices;
    this.stock = stock;
    this.brand = brand;
    this.discount = discount;
  }
}

class NewSnack extends BaseProduct {
  weight = 0;
  flavour = '';
  expiryDate = '';

  constructor(
    name,
    price,
    stock,
    flavour,
    weight,
    expiryDate,
    discount,
    brand
  ) {
    super(name, price, stock, brand, discount);
    this.flavour = flavour;
    this.weight = weight;
    this.expiryDate = expiryDate;
  }
}

class NewClothes extends BaseProduct {
  fitType = '';
  fabric = '';
  color = '';
  size = '';

  constructor(
    name,
    price,
    stock,
    brand,
    fitType,
    fabric,
    color,
    discount,
    size
  ) {
    super(name, price, stock, brand, discount);
    this.fitType = fitType;
    this.fabric = fabric;
    this.color = color;
    this.size = size;
  }
}

// DRY (Dont Repeat Yourself)
const clothe1 = new NewClothes('Kaos', 100000, 1000, 'Bebas', 10, 'Fit', 'Cotton', 'Black', 'L');
console.log(clothe1)