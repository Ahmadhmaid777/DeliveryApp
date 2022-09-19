import icons from "../assets/icons";
import Colors from "../constants/Colors";
import { HOME_TAB_KEY } from "../utils/constants";

export const getTabIcon = (Component, foucsed) => {
  let fillColort = foucsed ? Colors.primary : Colors.grayLight;

  return <Component fill={fillColort} />;
};

export const getIconByRouteName = (routeName) => {
  switch (routeName) {
    case HOME_TAB_KEY.RESTURANTS:
      return icons.FoodIcon;

    case HOME_TAB_KEY.SEARCH:
      return icons.SearchIcon;

    case HOME_TAB_KEY.FAVORIT:
      return icons.HeartIcon;

    case HOME_TAB_KEY.PROFILE:
      return icons.ProfileIcon;
  }
};
