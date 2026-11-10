export const business = {
  name: "Oji Ramen",
  url: "https://ojiramen.in",
  tagline: "Cozy Japanese eatery serving authentic ramen and traditional dishes.",
  phone: "044 4775 9900",
  phoneHref: "tel:+914447759900",
  email: "support@ojiramen.in",
  address: {
    line1: "No. 103B (Old), New No. 50/A, Bava Street",
    locality: "Alwarpet",
    city: "Chennai",
    state: "Tamil Nadu",
    postalCode: "600018",
  },
  features: ["Private dining room", "Vegetarian options", "Wi-Fi"],
};

export const fullAddress = `${business.address.line1}, ${business.address.locality}, ${business.address.city}, ${business.address.state} ${business.address.postalCode}`;

export type MenuItem = {
  name: string;
  price: string;
  desc?: string;
  veg?: boolean;
  isNew?: boolean;
};

export const ramen: MenuItem[] = [
  { name: "Veggie Tonkotsu Ramen", price: "750", veg: true, desc: "Umami rich vegetarian ramen with soy milk with nori, scallions, grilled mushrooms, and sweet corn." },
  { name: "Shoyu Vegetable Ramen", price: "750", veg: true, desc: "Our clear vegetable and soy broth ramen with nori, tofu, assorted mushrooms, scallions and char grilled napa cabbage." },
  { name: "Truffle Butter Udon Mushroom", price: "575", veg: true, isNew: true, desc: "Udon noodles coated in truffle infused butter, tossed with portobello mushrooms." },
  { name: "Mountain Devil (Tofu | Chicken | Pork)", price: "750 | 850 | 950", desc: "Spicy and incredibly tasty Japanese noodle soup topped with spicy stir fried minced pork/chicken/tofu, scallions, bok choy and soft cooked eggs." },
  { name: "Tsukemen (Veg | Chicken | Pork)", price: "750 / 850 / 950", desc: "Tsukemen, also known as dipping noodles, is a popular Japanese dish. A flavourful broth with a choice of pork/chicken/tofu along with a bowl handmade noodles." },
  { name: "Oji Pork Ramen", price: "950", desc: "Our Tokyo style pork and soy ramen with chashu pork, scallions, nori, soft cooked egg." },
  { name: "Shoyu Pork Ramen", price: "950", isNew: true, desc: "Shoyu pork broth, chashu pork, soft cooked eggs, scallions and nori." },
  { name: "Veg Gyoza Ramen", price: "750", veg: true, desc: "Savoury broth served with home-made noodles, topped with succulent veg gyozas, scallions and bok choy." },
  { name: "Veg Miso Coconut Chilli Ramen", price: "750", veg: true, isNew: true, desc: "A rich and creamy coconut miso broth with a hint of chilli topped with bok choy, broccoli, shiitake and oyster mushrooms." },
  { name: "Chicken Miso Coconut Chilli Ramen", price: "850", isNew: true, desc: "A rich and creamy coconut miso broth with a hint of chilli topped with bok choy, chicken, scallions and soft cooked egg." },
  { name: "Oji's Special Mix", price: "950", desc: "A carefully measured mix of chicken and pork ramen broths topped off with soy milk with nori, soft poached egg, scallions, poached chicken, chashu pork." },
  { name: "Chicken Gyoza Ramen", price: "850", desc: "Savoury broth served with home-made noodles, topped with succulent chicken gyozas, scallions and bok choy and soft cooked eggs." },
  { name: "Chicken Miso Soy Ramen", price: "850", desc: "Milky chicken ramen with poached chicken, soft cooked egg, scallion, char grilled onions." },
  { name: "Yaki Ramen (Veg | Egg | Chicken)", price: "525 | 550 | 595", desc: "Oji's special pan tossed ramen noodles with napa cabbage." },
];

export const addOns: MenuItem[] = [
  { name: "Chicken", price: "175" },
  { name: "Tofu", price: "150" },
  { name: "Pork", price: "195" },
  { name: "Vegetables / Mushrooms", price: "150" },
  { name: "Eggs", price: "125" },
  { name: "Noodles / Rice", price: "125" },
];

export const desserts: MenuItem[] = [
  { name: "Choice of Ice Cream", price: "125", desc: "Strawberry Cheesecake | Lotus Biscoff" },
  { name: "Chocolate Brownie with Icecream", price: "250" },
  { name: "Japanese Cheesecake", price: "345" },
  { name: "Kakigori", price: "425", isNew: true, desc: "Matcha Cream | Strawberry Cream | Spiced Pineapple & Coconut Cream" },
];

export const menuNotes = [
  "Veg noodles option available.",
  "Prices in INR. 5% service charge applies.",
  "Please inform our service associate if you are intolerant to any ingredient.",
];
