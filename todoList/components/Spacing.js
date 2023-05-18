
/* Importerar React och inbyggda komponentgrupper från reactNative */
import React from "react";
import { View, StyleSheet } from "react-native";

/* Skapar en variabel spacing, med props variant och
och hänvisar till styles-variabeln, anger variant som props och vald variant är 1. */
const Spacing = ({ variant = '1'}) => {
    return (
        <View style={styles[variant]}>
            
        </View>
    )
}

/* Skapar styles. */
const styles = StyleSheet.create({
    1: {
        marginVertical: 5,
    },
    2: {
        marginVertical: 10,
    },
    3: {
        marginVertical: 20,
    },
})

export default Spacing