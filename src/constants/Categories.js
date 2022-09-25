import icons from "../assets/icons";

export default catergories = [
  {
    id: 1,
    title: "Rice",
    icon: icons.rice_bowl,
  },
  {
    id: 2,
    title: "Noodles",
    icon: icons.noodle,
  },
  {
    id: 3,
    title: "Hot Dogs",
    icon: icons.hotdog,
  },
  {
    id: 4,
    title: "Salads",
    icon: icons.salad,
  },
  {
    id: 5,
    title: "Burgers",
    icon: icons.hamburger,
  },
  {
    id: 6,
    title: "Pizza",
    icon: icons.pizza,
  },
  {
    id: 7,
    title: "Snacks",
    icon: icons.fries,
  },
  {
    id: 8,
    title: "Sushi",
    icon: icons.sushi,
  },
  {
    id: 9,
    title: "Desserts",
    icon: icons.donut,
  },
  {
    id: 10,
    title: "Drinks",
    icon: icons.drink,
  },
];

export const getMultibleCategoiryById = (restaurantCategories) => {
  let arr = [];
  for (let i = 0; i < catergories.length; i++) {
    if (restaurantCategories.includes(catergories[i].id)) {
      arr.push(catergories[i]);
    }
    if (arr.length == restaurantCategories.length) {
      return arr;
    }
  }
  return arr;
};
