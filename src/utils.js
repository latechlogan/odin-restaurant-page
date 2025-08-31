// utils.js
export function createElement(tag, options = {}) {
  const { classes = "", content = "", attributes = {} } = options;

  const element = document.createElement(tag);

  if (classes) {
    const classList = Array.isArray(classes) ? classes : classes.split(" ");
    element.classList.add(...classList);
  }

  if (content) element.innerHTML = content;

  // Handle all attributes including data-* ones
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

export function createSVGElement(tag, options = {}) {
  const { classes = "", attributes = {}, children = [] } = options;

  // Create SVG element in proper namespace
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);

  if (classes) element.setAttribute("class", classes);

  // SVG attributes
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  // Add child elements if provided
  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
}

// This is the more flexible SVG wrapper (uses createSVGElement above)
export function createSVG(options = {}) {
  const {
    width = 24,
    height = 24,
    viewBox,
    classes = "",
    children = [],
    ...otherAttributes // Catches ALL other properties
  } = options;

  return createSVGElement("svg", {
    // <-- Still calling createSVGElement!
    classes,
    attributes: {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: viewBox || `0 0 ${width} ${height}`,
      ...otherAttributes,
    },
    children,
  });
}
