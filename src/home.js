import { createElement } from "./utils";

const section = createElement("section");

const sectionHeader = createElement("h1", {
  classes: "text-style-h1",
  content: "Bloom & Brew",
});

const sectionContentOne = createElement("p", {
  classes: "text-style-p tagline",
  content: "Coffee, community, and treats everyone can enjoy.",
});

const sectionContentTwo = createElement("p", {
  classes: "text-style-p intro",
  content:
    "Welcome to Bloom & Brew \u2014 where every cup of coffee comes with a side of comfort, and every pastry is baked with care. Whether you\u2019re here for your morning pick-me-up, a sweet treat, or just a cozy place to unwind, we\u2019ve got a seat waiting for you.",
});

section.append(sectionHeader, sectionContentOne, sectionContentTwo);
export default section;
