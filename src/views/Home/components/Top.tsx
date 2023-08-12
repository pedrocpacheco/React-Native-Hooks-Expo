import { Text, View, Image } from "react-native"
import top from "../../../../assets/produtores/logo.png"

export default function Top(){
    return <View>
        <Image source={top}></Image>
        <Text>Olá Analista</Text>
        <Text>Confira os ciclistas cadastrados</Text>
    </View>
}