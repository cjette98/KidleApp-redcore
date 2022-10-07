import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = ({ userData }) => {
    const {name, photo, role} = userData
    return (
        <View style={styles.container}>
            <Image source={photo} style={styles.photo} />
            <View style={{ left: 10 }}>
                <Text style={{fontWeight:'bold', fontSize:16}}>{name}</Text>
                <Text>{role}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{marginBottom:20, flexDirection: 'row', alignItems: 'center' },
    photo: { width: 40, height: 40, borderRadius: 10 }
})