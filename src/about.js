import { createElement, createSVG, createSVGElement } from "./utils";

const section = createElement("section");

const sectionHeader = createElement("h1", {
  classes: "text-style-h1",
  content: "Our Story",
});

const sectionContentOne = createElement("p", {
  classes: "text-style-p",
  content:
    "Bloom & Brew started with one mom’s mission: to make birthday cakes her daughter could actually enjoy. After too many parties with desserts off-limits, the kitchen turned into a lab of allergen-friendly experiments. Soon, friends and neighbors were asking for cakes too. And because coffee and cake are a perfect match, the bakery blossomed into a café.",
});

const sectionContentTwo = createElement("p", {
  classes: "text-style-p",
  content:
    "Today, Bloom & Brew is still family-run, still passionate about delicious food, and still committed to creating a place where everyone can share in the joy of a treat.",
});

const mapSVG = createSVG({
  width: "24",
  height: "24",
  class: "feather feather-map-pin",
  children: [
    createSVGElement("path", {
      attributes: {
        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
      },
    }),
    createSVGElement("circle", {
      attributes: {
        cx: "12",
        cy: "10",
        r: "3",
      },
    }),
  ],
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

const addressContainer = createElement("p", {
  classes: "text-style-p",
});
addressContainer.append(mapSVG);
addressContainer.appendChild(
  document.createTextNode("\u2003123 Main Street, Anywhere, USA")
);

const phoneSVG = createSVG({
  width: "24",
  height: "24",
  class: "feather feather-phone",
  children: [
    createSVGElement("path", {
      attributes: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      },
    }),
  ],
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

const phoneContainer = createElement("p", {
  classes: "text-style-p",
});
phoneContainer.append(phoneSVG);
phoneContainer.appendChild(document.createTextNode("\u2003(555) 123-4567"));

const emailSVG = createSVG({
  width: "24",
  height: "24",
  class: "feather feather-mail",
  children: [
    createSVGElement("path", {
      attributes: {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
      },
    }),
    createSVGElement("polyline", {
      attributes: {
        points: "22,6 12,13 2,6",
      },
    }),
  ],
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

const emailContainer = createElement("p", {
  classes: "text-style-p",
});
emailContainer.append(emailSVG);
emailContainer.appendChild(
  document.createTextNode("\u2003hello@bloomandbrew.com")
);

const contactSection = createElement("div", {
  classes: "contact",
});
contactSection.append(addressContainer, phoneContainer, emailContainer);

section.append(
  sectionHeader,
  sectionContentOne,
  sectionContentTwo,
  contactSection
);
export default section;
