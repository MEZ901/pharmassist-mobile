import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

interface Pharmacy {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  distance: number;
}

const getNearbyPharmacies = async (
  searchQuery: string
): Promise<Pharmacy[]> => {
  return [
    {
      id: "1",
      name: "Pharmacy 1",
      address: "123 Main St",
      latitude: 37.7749,
      longitude: -122.4194,
      distance: 1.5,
    },
    {
      id: "2",
      name: "Pharmacy 2",
      address: "456 Elm St",
      latitude: 37.7749,
      longitude: -122.4194,
      distance: 2.5,
    },
  ];
};

const PharmacyFinderScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy | null>(
    null
  );
  const [initialRegion, setInitialRegion] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }>({
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const fetchNearbyPharmacies = async () => {
    const nearbyPharmacies = await getNearbyPharmacies(searchQuery);
    setPharmacies(nearbyPharmacies);
  };

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setInitialRegion((prevRegion) => ({
        ...prevRegion,
        latitude,
        longitude,
      }));
    } catch (error) {
      console.log("Error getting current location", error);
    }
  };

  useEffect(() => {
    fetchNearbyPharmacies();
    getCurrentLocation();
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter location or search for pharmacies"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <MapView style={styles.map} region={initialRegion}>
        {pharmacies.map((pharmacy) => (
          <Marker
            key={pharmacy.id}
            coordinate={{
              latitude: pharmacy.latitude,
              longitude: pharmacy.longitude,
            }}
            onPress={() => setSelectedPharmacy(pharmacy)}
          />
        ))}
      </MapView>

      <FlatList
        style={styles.pharmacyList}
        data={pharmacies}
        keyExtractor={(pharmacy) => pharmacy.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedPharmacy(item)}>
            <View style={styles.pharmacyItem}>
              <Text style={styles.pharmacyName}>{item.name}</Text>
              <Text>{item.address}</Text>
              <Text>Distance: {item.distance} km</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {selectedPharmacy && (
        <View style={styles.selectedPharmacy}>
          {/* Display details of the selected pharmacy */}
          <Text style={styles.selectedPharmacyName}>
            {selectedPharmacy.name}
          </Text>
          <Text>{selectedPharmacy.address}</Text>
          {/* Add additional details here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  map: {
    flex: 1,
  },
  pharmacyList: {
    maxHeight: 200,
  },
  pharmacyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  pharmacyName: {
    fontWeight: "bold",
  },
  selectedPharmacy: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "white",
  },
  selectedPharmacyName: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PharmacyFinderScreen;
