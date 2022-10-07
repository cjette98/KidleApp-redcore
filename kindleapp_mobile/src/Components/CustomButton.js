import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({action, lbl}) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={action}>
            <Text style={styles.btnlbl}>{lbl}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#ff9900",
        padding: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    btnlbl: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
})