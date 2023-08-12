import { Text, View, Image, StyleSheet } from "react-native"
import top from "../../../../assets/produtores/logo.png"

export default function Top(){
    return <View style={styles.top}>
        <Image source={top} style={styles.topImage} />
        <Text style={styles.welcomeTitle}>Olá Analista</Text>
        <Text style={styles.welcomeCaption}>Confira os ciclistas cadastrados</Text>
    </View>
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: "#F6F6F6",
        padding: 16
    },
    topImage: {
        marginTop: 30,
        width: 70,
        height: 28
    },
    welcomeTitle: {
        marginTop: 20,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    welcomeCaption: {
        fontSize: 16,
        lineHeight: 26
    }
})