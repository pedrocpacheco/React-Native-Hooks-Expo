import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

import Stars from "../../../components/Stars";

export default function Cyclist({ name, image, dystance, stars }){
  const[selected, setSelected] = useState(false);

  return <TouchableOpacity style={styles.card} onPress={() => setSelected(!selected)}>
    <Image source={image} style={styles.image} accessibilityLabel={name}/>
    <View style={styles.info}>
      <View>
        <Text style={styles.name}>{ name }</Text>
        <Stars quantity={ stars } editable={selected} big={selected}/>
      </View>
      <Text style={styles.dystance}>{ dystance }</Text>
    </View>
  </TouchableOpacity>
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