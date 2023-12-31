import React from "react"
import { Text, View, Image, StyleSheet } from "react-native"

import { getTop } from "../../../services/getData"
import logo from "../../../../assets/produtores/logo.png"

class Top extends React.Component{
    state = { top: { welcome: "", caption: "" } }

    updateTop(){
        const retorno = getTop();
        this.setState({ top: retorno })
    }

    componentDidMount(){
        this.updateTop();
    }

    render(){ 
    return <View style={styles.top}>
        <Image source={logo} style={styles.topImage} />
        <Text style={styles.welcome}>{this.state.top.welcome}</Text>
        <Text style={styles.caption}>{this.state.top.caption}</Text>
    </View>
    }
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
    welcome: {
        marginTop: 20,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646"
    },
    caption: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3"
    }
})

export default Top;