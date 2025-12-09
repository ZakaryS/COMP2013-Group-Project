const products = require("./products");
const jsonProducts = JSON.stringify(products);
const fs = require("fs");
fs.writeFileSync("./products.json", jsonProducts);
