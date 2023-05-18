import React from "react";
import { StyleSheet, Text } from "react-native";

/* Skapar typography.
    Stoppar in props som jag använder i app. */
const Typography = ({ children, style, variant = 'body'}) => {
    return <Text style={[style, styles[variant],]}>{children}</Text>
    
}

/* Skapar styling. */

const styles = StyleSheet.create({
    header: {
        fontSize: 38,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 16,
    },
    subheader: {
        fontSize: 22,
        textTransform: 'uppercase',
    },
   
});

export default Typography