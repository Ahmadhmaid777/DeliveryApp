import { Platform } from "react-native";

export const SCREEN_KEY = {
  HOME: "Home",
  ORDER_MAP: "ORDER_MAP",
  RESTURANT: "RESUTRANT",
};

export const HOME_TAB_KEY = {
  RESTURANTS: "RESTURANTS",
  FAVORIT: "FAVORIT",
  SEARCH: "SEARCH",
  PROFILE: "PROFILE",
};

export const GOOGLE_API_KEY =
  Platform == "android"
    ? "AIzaSyBj2Dqx5yDkyrLZIl8gNUxfRccxe3WoPRc"
    : "AIzaSyD4tN_gWF1jxVQU75v4eQL3Fqbwf65XrGk";
