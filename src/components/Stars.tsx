import {useState} from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"

import star from "../../assets/produtores/estrela.png"
import starGray from "../../assets/produtores/estrelaCinza.png"

export default function Stars({ quantity: oldQuantity, editable = true, big = true }){

  const [quantity, setQuantity] = useState(oldQuantity);
  const styles = stylesFunction(big);
  
  const getImage = (index) =>{
    if (index < quantity){
      return star;
    }
    return starGray;
  }

  const RenderStars: any = () =>{
    const listStarts = [];
    for (let i = 0; i < 5; i++) {
      listStarts.push(
        <TouchableOpacity 
          key={i}
          onPress={() => setQuantity(i + 1)}
          disabled={!editable}>
          <Image source={getImage(i)} style={styles.star}/>
        </TouchableOpacity>
      );
    }
    return listStarts;
  }

  return <View style={styles.stars}>
      <RenderStars />
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