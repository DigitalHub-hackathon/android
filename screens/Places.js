import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, StatusBar, Dimensions, ScrollView } from 'react-native'
import Header from '../modules/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import info from '../modules/info'
import GroupBlock from '../modules/GroupBlock'

export default class Places extends PureComponent {

    state ={
        organizations: [],
        liked_organizations: [],
        visible: false,
        likes: '',
        liked: []
    }

    async componentDidMount(){
        try{
            const orgApiCall = await fetch('http://193.187.173.215/api/groups/0', {method: 'GET'})
            const organizations = await orgApiCall.json()
            this.setState({ organizations: organizations})
        }
        catch(err){}
    }

    async sendReq(){
        console.log("SEND")
        try{
            const sendApiCall = await fetch('http://193.187.173.215/api/predict_groups?likes=' + this.state.likes, {method: 'GET'})
            const events = await sendApiCall.json()
            this.setState({ liked_organizations: events})
        }
        catch(err){}
    }

    setGroup(info){
        if (this.state.likes === ''){
            this.setState({likes: this.state.organizations[Number(info)].id})
        }
        else{
            this.setState({likes: this.state.likes + '%20' + this.state.organizations[Number(info)].id})
        }
        
        var array = this.state.liked
        array = array.push(this.state.organizations[Number(info)])
        this.setState({liked: array})

        AsyncStorage.setItem(email + "_groups", JSON.stringify(this.state.liked))
    }

    render(){
        return(
            <View style={{ flexDirection: 'column'}}>
                {this.state.visible === true ? 
                    <View style={{ backgroundColor: 'white', width: 200, height: 50, borderRadius: 15, opacity: 0.7, position: 'absolute', top: Dimensions.get('window').height / 2, alignSelf: 'center', zIndex: 3, alignItems: 'center'}}>
                        <Text style={{ fontFamily: 'Yanone', fontSize: 30, textAlignVertical: 'center', height: 50}}>Отлично!</Text>
                    </View> : null}
                <Header name={'Кружки'} color={'#A62929'} image={<MaterialCommunityIcons style={{ position: "absolute", right: 10, bottom: 5, opacity: 0.5}} name="account-group" size={40} color="white" />} onRefresh={() => this.sendReq()}/>
                <View style={{ backgroundColor: '#003f5c' , minHeight: Dimensions.get('window').height}}>
                    <ScrollView style={{ paddingTop: 10 }}>
                        {this.state.liked_organizations.map(item => {
                            return(<GroupBlock event={item} onPressed={() => navigate('Конкретное', {item})} onPress={(info) => {this.setState({ visible: true})
                            setTimeout(this.setFalse = () => {
                                this.setState({visible: false})
                            }, 1500)
                            this.setgroup(info)
                        }} favourite={true}/>)
                        })}
                        {this.state.organizations.map(item => {
                            var index = this.state.organizations.indexOf(item)
                            return(<GroupBlock index={index} event={item} onPress={(info) => {this.setState({ visible: true})
                            setTimeout(this.setFalse = () => {
                                this.setState({visible: false})
                            }, 1500)
                            this.setGroup(info)
                        }}/>)
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}