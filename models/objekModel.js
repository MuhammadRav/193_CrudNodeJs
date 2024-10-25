class Product {
    constructor(id, name, price, description) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
    }
  }
  
  const products = [
    new Product(1, "Laptop", 15000000, "Laptop high-end dengan prosesor terbaru"),
    new Product(2, "Smartphone", 5000000, "Smartphone dengan kamera canggih"),
    new Product(3, "Tablet", 3000000, "Tablet dengan layar besar dan baterai tahan lama"),
  ];
  
  module.exports = { Product, products };
  