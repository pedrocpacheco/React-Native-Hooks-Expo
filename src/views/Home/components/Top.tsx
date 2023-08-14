import { Text, View, Image, StyleSheet } from "react-native"

import { getTop } from "../../../services/getData"
import logo from "../../../../assets/produtores/logo.png"

    export default function Top(){
    return <View style={styles.top}>
        <Image source={logo} style={styles.topImage} />
        <Text style={styles.welcomeTitle}>{welcomeCaption}</Text>
        <Text style={styles.welcomeCaption}>{welcomeTitle}</Text>
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