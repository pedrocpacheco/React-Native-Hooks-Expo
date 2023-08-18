import { Image, StyleSheet, View } from "react-native"

import star from "../../assets/produtores/estrela.png"

export default function Stars({
  quantity: oldQuantity,
  editable = false,
  big = false
}){
  const styles = stylesFunction(big);
  return <View style={styles.stars}>
      <Image source={star} style={styles.star}/>
      <Image source={star} style={styles.star}/>
      <Image source={star} style={styles.star}/>
      <Image source={star} style={styles.star}/>
      <Image source={star} style={styles.star}/>
  </View>
}

const stylesFunction = (big) => StyleSheet.create({
  stars: {
    flexDirection: "row"
  },
  star: {
    width: big ? 36: 12,
    height: big ? 36: 12,
    marginRight: 2
  }
})