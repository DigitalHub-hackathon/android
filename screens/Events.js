import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native'
import Header from '../modules/Header'
import { MaterialIcons } from '@expo/vector-icons'
import EventBlock from '../modules/EventBlock'

export default class Events extends PureComponent {
    state = {
        events: [],
        liked_events: [],
        visible: false,
        email: '',
        likes: ''
    }

    async componentDidMount(){
        try{
            const orgApiCall = await fetch('http://193.187.173.215/api/events/0', {method: 'GET'})
            const events = await orgApiCall.json()
            this.setState({ events: events})
        }
        catch(err){}
    }

    async sendReq(){
        try{
            const sendApiCall = await fetch('http://193.187.173.215/api/predict_event?likes=' + this.state.likes, {method: 'GET'})
            const events = await sendApiCall.json()
            this.setState({ liked_events: events})
        }
        catch(err){}
    }

    setEvent(info){
        if (this.state.likes === ''){
            this.setState({likes: this.state.events[Number(info)].id})
        }
        else{
            this.setState({likes: this.state.likes + '%20' + this.state.events[Number(info)].id})
        }
        

        console.log(this.state.likes)
    }


    render(){
        const { navigate } = this.props.navigation
        return(
            <SafeAreaView style={{ flexDirection: 'column'}}>

                {this.state.visible === true ? 
                    <View style={{ backgroundColor: 'white', width: 200, height: 50, borderRadius: 15, opacity: 0.7, position: 'absolute', top: Dimensions.get('window').height / 2, alignSelf: 'center', zIndex: 3, alignItems: 'center'}}>
                        <Text style={{ fontFamily: 'Yanone', fontSize: 30, textAlignVertical: 'center', height: 50}}>Отлично!</Text>
                    </View> : null}
                <Header name={'Мероприятия'} color={'#A62929'} image={<MaterialIcons style={{ position: "absolute", right: 10, bottom: 5, opacity: 0.5}} name="event" size={40} color="white" />} onRefresh={() => this.sendReq()}/>
                <View style={{ backgroundColor: 'white', minHeight: Dimensions.get('window').height, backgroundColor: '#003f5c' }}>
                    <ScrollView style={{ paddingTop: 10 }}>
                        {this.state.liked_events.map(item => {
                            return(<EventBlock event={item} onPressed={() => navigate('Конкретное', {item})} onPress={(info) => {this.setState({ visible: true})
                            setTimeout(this.setFalse = () => {
                                this.setState({visible: false})
                            }, 1500)
                            this.setEvent(info)
                        }} favourite={true}/>)
                        })}
                        {this.state.events.map(item => {
                            let index = this.state.events.indexOf(item)
                            return(<EventBlock key={index} index={index} event={item} onPressed={() => navigate('Конкретное', {item})} onPress={(info) => {this.setState({ visible: true})
                                setTimeout(this.setFalse = () => {
                                    this.setState({visible: false})
                                }, 1500)
                                this.setEvent(info)
                            }}/>)
                        })}
                    
                    </ScrollView>    
                </View>
            </SafeAreaView>
        )
    }
}
