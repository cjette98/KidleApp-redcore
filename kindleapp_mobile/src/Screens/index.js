import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Platform, Image, StatusBar } from 'react-native'
import React, { useState } from 'react';
import mainContainer from './index.container'
import ViewPager from '@react-native-community/viewpager';
import { userInfo } from '../Constant/Dummy';
import Header from '../Components/Header';
import CustomButton from '../Components/CustomButton';
const KindleMain = () => {
    const { bookTitle, hascontent, browsefile } = mainContainer()
    return (
        <View
            collapsable={false}
            style={styles.container}
        >
            <View style={{ padding: 10 }}>
                <Header userData={userInfo} />
               <CustomButton action={browsefile} lbl={'Browse a book'} />
            </View>
            {hascontent == null ? <Text style={{ textAlign: 'center' }}>No book selected</Text> :
                <React.Fragment>
                    <View>
                        <Text style={styles.bookTitle}>Title : {bookTitle}</Text>
                    </View>
                    <ViewPager style={styles.viewPager} initialPage={0}>
                        {hascontent}
                    </ViewPager>
                </React.Fragment>
            }
        </View>
    );

}

export default KindleMain

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewPager: {
        flex: 1,
    },
    viewStyle: {
        padding: 10,
    },
    textContent: {
        fontSize: 17,
        textAlign: 'justify',
    },
    pageNumberStyle: {
        fontSize: 20,
        color: 'gray',
        alignSelf: 'flex-end',
    },
   bookTitle:{fontWeight:'bold', fontSize:20, textAlign:'center'}
});
