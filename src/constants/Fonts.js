const type = {};

const size = {
  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
};

const color = {
  black: "#1E1F20",
  white: "#FFFFFF",

  lightGray: "#F5F5F6",
  lightGray2: "#F6F6F7",
  lightGray3: "#EFEFF1",
  lightGray4: "#F8F8F9",
  transparent: "transparent",
  darkgray: "#898C95",
};
const style = {
  h1: {
    fontSize: size.h1,
    color: color.black,
    fontWeight: "700",
  },
  h2: { fontSize: size.h2, lineHeight: 36 },
  h3: { fontSize: size.h3, lineHeight: 36 },
  h4: { fontSize: size.h4, lineHeight: 36 },
  body1: { fontSize: size.body1, lineHeight: 36 },
  body2: { fontSize: size.body2, lineHeight: 30 },
  body3: { fontSize: size.body3, lineHeight: 22 },
  body4: { fontSize: size.body4, lineHeight: 22 },
  body5: { fontSize: size.body5, lineHeight: 22 },
};

export default {
  ...type,
  size,
  style,
  color,
};
