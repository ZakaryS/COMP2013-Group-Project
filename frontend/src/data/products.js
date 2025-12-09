const products = [
  {
    id: "3017620422003",
    productName: "Nutella",
    brand: "Ferrero",
    quantity: "400 g",
    image:
      "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_en.550.400.jpg",
    price: "$3.65",
  },
  {
    id: "5449000214911",
    productName: "Coca cola",
    brand: "Coca cola",
    quantity: "330 mL",
    image:
      "https://images.openfoodfacts.org/images/products/544/900/021/4911/front_en.119.400.jpg",
    price: "$1.75",
  },
  {
    id: "3033490004521",
    productName: "Yougurt",
    brand: "Danone",
    quantity: "500 g",
    image:
      "https://images.openfoodfacts.org/images/products/303/349/000/4521/front_fr.93.400.jpg",
    price: "$6.00",
  },
  {
    id: "20267605",
    productName: "Cashaws",
    brand: "Lidl",
    quantity: "200 g",
    image:
      "https://images.openfoodfacts.org/images/products/20267605/front_en.317.400.jpg",
    price: "$2.50",
  },
  {
    id: "3045140105502",
    productName: "Chocolate",
    brand: "Milka,Mondelez",
    quantity: "100 g",
    image:
      "https://images.openfoodfacts.org/images/products/304/514/010/5502/front_en.162.400.jpg",
    price: "$1.20",
  },
  {
    id: "7613035974685",
    productName: "Water",
    brand: "Hépar",
    quantity: "1 L",
    image:
      "https://images.openfoodfacts.org/images/products/761/303/597/4685/front_fr.288.400.jpg",
    price: "$0.75",
  },
  {
    id: "8715700017006",
    productName: "Ketchup",
    brand: "Heinz",
    quantity: "400 g",
    image:
      "https://images.openfoodfacts.org/images/products/871/570/001/7006/front_en.196.400.jpg",
    price: "$3.25",
  },
  {
    id: "3033710065967",
    productName: "Cacao Powder",
    brand: "Nestlé",
    quantity: "1 kg",
    image:
      "https://images.openfoodfacts.org/images/products/303/371/006/5967/front_en.472.400.jpg",
    price: "$12.25",
  },
  {
    id: "3124480191182",
    productName: "Tropical Juice",
    brand: "Oasis",
    quantity: "2 L",
    image:
      "https://images.openfoodfacts.org/images/products/312/448/019/1182/front_en.145.400.jpg",
    price: "$5.25",
  },
  {
    id: "7622300441937",
    productName: "Cream Cheese",
    brand: "Kraft",
    quantity: "150 g",
    image:
      "https://images.openfoodfacts.org/images/products/762/230/044/1937/front_en.130.400.jpg",
    price: "$2.65",
  },
  {
    id: "8076802085738",
    productName: "Pasta",
    brand: "Barilla",
    quantity: "500 g",
    image:
      "https://images.openfoodfacts.org/images/products/807/680/208/5738/front_en.3387.400.jpg",
    price: "$2.15",
  },
  {
    id: "3088542500285",
    productName: "Maple Syrup",
    brand: "Maple Joe",
    quantity: "250 g",
    image:
      "https://images.openfoodfacts.org/images/products/308/854/250/0285/front_en.218.400.jpg",
    price: "$4.75",
  },
  {
    id: "8076809513722",
    productName: "Pasta Sauce",
    brand: "Barilla",
    quantity: "400 g",
    image:
      "https://images.openfoodfacts.org/images/products/807/680/951/3722/front_fr.900.400.jpg",
    price: "$2.75",
  },
  {
    id: "4014400400007",
    productName: "Toffifee",
    brand: "Storck",
    quantity: "125 g",
    image:
      "https://images.openfoodfacts.org/images/products/401/440/040/0007/front_en.135.400.jpg",
    price: "$3.35",
  },
  {
    id: "5000159459228",
    productName: "Twix",
    brand: "Mars Wrigley",
    quantity: "50 g",
    image:
      "https://t4.ftcdn.net/jpg/03/36/44/81/240_F_336448171_8oHY6yEdZDhUIJDHcpPPnmWmGtwf1v40.jpg",
    price: "$1.00",
  },
  {
    id: "8000430138719",
    productName: "Mozzarella",
    brand: "Galbani",
    quantity: "125 g",
    image:
      "https://images.openfoodfacts.org/images/products/800/043/013/8719/front_en.91.400.jpg",
    price: "$3.40",
  },
  {
    id: "3229820116716",
    productName: "Muesli",
    brand: "Bjorg",
    quantity: "750 g",
    image:
      "https://images.openfoodfacts.org/images/products/322/982/011/6716/front_fr.188.400.jpg",
    price: "$7.70",
  },
  {
    id: "5053990138722",
    productName: "Pringles",
    brand: "Pringles",
    quantity: "200 g",
    image:
      "https://images.openfoodfacts.org/images/products/505/399/013/8722/front_en.233.400.jpg",
    price: "$3.25",
  },
  {
    id: "3168930008958",
    productName: "Lay's",
    brand: "Lay's",
    quantity: "150 g",
    image:
      "https://images.openfoodfacts.org/images/products/316/893/000/8958/front_fr.84.400.jpg",
    price: "$2.75",
  },
  {
    id: "8410188012092",
    productName: "Corn Flakes",
    brand: "Kellogg's",
    quantity: "500 g",
    image:
      "https://images.openfoodfacts.org/images/products/841/018/801/2092/front_en.71.400.jpg",
    price: "$5.75",
  },
  {
    id: "9002490100070",
    productName: "Red Bull",
    brand: "Red Bull",
    quantity: "250 mL",
    image:
      "https://images.openfoodfacts.org/images/products/900/249/010/0070/front_en.245.400.jpg",
    price: "$2.50",
  },
  {
    id: "3347761000670",
    productName: "Banana",
    brand: "La Banane",
    quantity: "1 lb",
    image:
      "https://images.openfoodfacts.org/images/products/334/776/100/0670/front_fr.20.400.jpg",
    price: "$0.65",
  },
  {
    id: "4001724819806",
    productName: "Pizza",
    brand: "Dr. Oetker",
    quantity: "335 g",
    image:
      "https://images.openfoodfacts.org/images/products/400/172/481/9806/front_en.247.400.jpg",
    price: "$6.25",
  },
  {
    id: "3608580765653",
    productName: "Choco Mousse",
    brand: "Bonne Maman",
    quantity: "200 g",
    image:
      "https://images.openfoodfacts.org/images/products/360/858/076/5653/front_fr.92.400.jpg",
    price: "$4.75",
  },
];
// console.log(JSON.stringify(products));
export default products;
