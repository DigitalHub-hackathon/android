import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


const Header = ({name, color, image, mode}) => {
    console.log(name, color)
    return(
        <View style={{ height: 80, width: Dimensions.width, backgroundColor: color, flexDirection: 'row'}}>
            {mode === 'back' ? <Ionicons name="md-arrow-back" size={35} color="white" /> : <Ionicons style={{position: 'absolute', bottom: 7, left: 10}} name="md-arrow-back" size={35} color={color} />}
            <Text style={{ fontFamily: 'Yanone', fontSize: 40, marginLeft: 20, position: 'absolute', bottom: 0, left: 30, color: 'white' }}>{name}</Text>
            {image}
        </View>
    )
}

export default Header