import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'; 


const Header = ({name, color, image, mode, onPress, onRefresh}) => {
    return(
        <View style={{ height: 80, width: Dimensions.width, backgroundColor: color, flexDirection: 'row'}}>
            {mode === 'back' ? 
                <TouchableWithoutFeedback onPress={onPress}>
                    <Ionicons style={{position: 'absolute', bottom: 7, left: 10, zIndex: 2}} name="md-arrow-back" size={35} color="white" />
                </TouchableWithoutFeedback> : <Ionicons style={{position: 'absolute', bottom: 7, left: 10}} name="md-arrow-back" size={35} color={color} />}
            <Text style={{ fontFamily: 'Yanone', fontSize: 40, marginLeft: 20, position: 'absolute', bottom: 0, left: 30, color: 'white' }}>{name}</Text>
            {name !== 'Профиль' || mode !== 'back' ?
            <TouchableWithoutFeedback onPress={onRefresh}>
                <View style={{width: 60, height: 60, backgroundColor: 'transparent', borderRadius: 30, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: -10, right: 5, zIndex: 3}}>
                    <MaterialIcons name="refresh" size={32} color="white" />
                </View>
            </TouchableWithoutFeedback> : null}
            
        </View>
    )
}

export default Header