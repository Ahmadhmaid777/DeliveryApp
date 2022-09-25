import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Colors, Layout } from "../constants";
import * as Location from "expo-location";
import { getRestaurantById } from "../constants/Restaurants";
import icons from "../assets/icons";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "../utils/constants";
import OrderDeliverHeader from "../components/headers/OrderDeliverHeader";
import DeliveryDirver from "../components/DeliveryDirver";
import LoaderAnimation from "../components/loaders/LoaderAnimation";

export default function OrderDelivery({ route, navigation }) {
  let [restaurnt, setRestaurnt] = useState(null);
  let [region, setRegion] = useState(null);
  let [toLocation, setToLocation] = useState(null);
  let [fromLoaction, setFromLoaction] = useState(null);
  let [loactionEnabled, setLoactionEnabled] = useState(false);
  let [duration, setDuration] = useState(0);
  let [isMapReady, setIsMapReady] = useState(false);
  let [showIndicator, setShowIndeicator] = useState(true);
  useEffect(() => {
    const newRestaurant = getRestaurantById(route.params.restaurantId);
    setRestaurnt(newRestaurant);
    const fromLoc = newRestaurant.location;
    (async () => {
      const { coords: toLoc } = await _getCurrentLocation();
      const newRegion = {
        latitude: (toLoc.latitude + fromLoc.latitude) / 2,
        longitude: (toLoc.longitude + fromLoc.longitude) / 2,
        latitudeDelta: (toLoc.latitude - fromLoc.latitude) * 2,
        longitudeDelta: (toLoc.longitude - fromLoc.longitude) * 2,
      };

      setRegion(newRegion);
      setFromLoaction(fromLoc);
      setToLocation(toLoc);
      setShowIndeicator(false);
    })();
  }, []);

  useEffect(() => {}, [toLocation]);

  const _getCurrentLocation = async () => {
    let isEnabled = await _requsetPermissions();
    if (isEnabled) {
      return await Location.getCurrentPositionAsync();
    }
  };

  const _requsetPermissions = async () => {
    if (Location.PermissionStatus == "granted") {
      setLoactionEnabled(true);
      return true;
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      setLoactionEnabled(true);
      return true;
    } else if (status == "denied") {
      Alert.alert(" loaction permssion to get your loaction");
      return false;
    }
  };

  const CustomMarker = ({ coordinate, icon, draggable = false }) => {
    if (!coordinate) {
      return null;
    }
    return (
      <Marker
        draggable={draggable}
        coordinate={coordinate}
        anchor={{ x: 0.5, y: 0.5 }}
        flat={true}
        onDragEnd={(e) => {
          setToLocation(e._dispatchInstances.pendingProps.coordinate);
        }}
      >
        <Image source={icon} style={{ width: 40, height: 40 }} />
      </Marker>
    );
  };

  return (
    <View style={styles.container}>
      <OrderDeliverHeader duration={duration} />
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        loadingEnabled={true}
        style={{
          width: Layout.window.width,
          height: Layout.window.height,
        }}
      >
        {/* {toLocation && fromLoaction && (
          <MapViewDirections
            origin={fromLoaction}
            destination={toLocation}
            apikey={GOOGLE_API_KEY}
            storkeColor={Colors.primary}
            strokeWidth={5}
            optimizeWaypoints={true}
            onReady={(result) => {
              setDuration(result.duration);
              setIsMapReady(true);
            }}
          />
        )} */}

        <CustomMarker coordinate={fromLoaction} icon={icons.car} />
        <CustomMarker
          draggable={true}
          coordinate={toLocation}
          icon={icons.pin}
        />
      </MapView>
      <DeliveryDirver restaurantName={restaurnt?.name} />
      <LoaderAnimation show={showIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
