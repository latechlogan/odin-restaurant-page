import { createElement } from "./utils";

const drinks = [
  {
    name: "House Brew",
    description: "Classic, smooth, and comforting.",
    price: "12oz $2.50 | 16oz $3.00",
  },
  {
    name: "Vanilla Latte",
    description: "Espresso + steamed milk + hint of vanilla.",
    price: "12oz $3.75 | 16oz $4.25",
  },
  {
    name: "Mocha Bliss",
    description: "Espresso, chocolate, and cream.",
    price: "12oz $4.00 | 16oz $4.50",
  },
  {
    name: "Iced Caramel Cold Brew",
    description: "Sweet, bold, and refreshing.",
    price: "16oz $4.25 | 20oz $4.75",
  },
];

const food = [
  {
    name: "Morning Glory Muffin",
    description: "Cinnamon-spiced with carrot and apple.",
    price: "$2.75 each",
  },
  {
    name: "Chocolate Chip Cookie",
    description: "Crispy edges, chewy middle.",
    price: "$1.75 each | 3 for $4.50",
  },
  {
    name: "Blueberry Scone",
    description: "Golden, buttery, with fresh blueberries.",
    price: "$3.25 each",
  },
  {
    name: "Celebration Cupcake",
    description: "Colorful sprinkle-topped vanilla cake.",
    price: "$3.50 each | 6 for $18",
  },
  {
    name: "Mini Loaf (seasonal)",
    description: "Rotating flavors — pumpkin, lemon, or banana.",
    price: "$5.00 each",
  },
];

const section = createElement("section");

const sectionHeader = createElement("h1", {
  classes: "text-style-h2",
  content: "Menu",
});

const drinkMenuSubhead = createElement("h2", {
  classes: "text-style-h4 menu-section",
  content: "Coffee & Drinks",
});

const drinkMenuList = createElement("ul", {
  classes: "menu-list",
});

drinks.forEach((drink) => {
  const element = createElement("li", {
    classes: "menu-item",
  });

  const name = createElement("strong", {
    classes: "name",
    content: drink.name,
  });
  const desc = createElement("span", {
    classes: "desc",
    content: drink.description,
  });
  const price = createElement("span", {
    classes: "price",
    content: drink.price,
  });

  element.append(name, desc, price);
  drinkMenuList.append(element);
});

const foodMenuSubhead = createElement("h2", {
  classes: "text-style-h4 menu-section",
  content: "Baked Goods (egg & nut free)",
});

const foodMenuList = createElement("ul", {
  classes: "menu-list",
});

food.forEach((food) => {
  const element = createElement("li", {
    classes: "menu-item",
  });

  const name = createElement("strong", {
    classes: "name",
    content: food.name,
  });
  const desc = createElement("span", {
    classes: "desc",
    content: food.description,
  });
  const price = createElement("span", {
    classes: "price",
    content: food.price,
  });

  element.append(name, desc, price);
  foodMenuList.append(element);
});

section.append(
  sectionHeader,
  drinkMenuSubhead,
  drinkMenuList,
  foodMenuSubhead,
  foodMenuList
);
export default section;
