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
        <Text style={styles.welcomeTitle}>{this.state.top.welcome}</Text>
        <Text style={styles.welcomeCaption}>{this.state.top.caption}</Text>
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

export default Top;