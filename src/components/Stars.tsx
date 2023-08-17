import { Text, Image, StyleSheet } from "react-native"


import star from "../../../../assets/produtores/estrela.png"
import starGray from "../../../../assets/produtores/estrelaCinza.png"

export default function Stars({
  quantity: oldQuantity,
  editable = false,
  big = false
}){
  return <Image source={star} style={styles.stars}/>
}

const styles = (big) => StyleSheet.create({
  stars: {
    width: big ? 36: 12,
    height: big ? 36: 12
  }
})