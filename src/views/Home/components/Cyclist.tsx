import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Cyclist({ name, image, dystance, stars }){
  return <View style={styles.card}>
    <Image source={image} style={styles.image} accessibilityLabel={name}/>
    <View style={styles.info}>
      <Text>{ name }</Text>
      <Text>{ dystance }</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F6F6F6",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: "row",

    // Sombra no Android
    elevation: 4, 

    // Sombra no IOS
    shadowColor: "#0000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62

  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "bold"
  },
  dystance: {
    fontSize: 12,
    lineHeight: 19
  }
})