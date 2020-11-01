import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, ScrollView, AsyncStorage, NativeModules } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-datepicker'
import { AntDesign } from '@expo/vector-icons'; 
import App from '../../App'

export default class Register extends React.Component {
  state={
    email:'',
    firstName: '',
    middleName: '',
    lastName: '',
    password:'',
    confirm:'',
    gender: 'male',
    date: '2001-02-14',
    events: [],
    groups: [],
    books: []
  }

  async _storeData() {
    try {
      await AsyncStorage.setItem(this.state.email, JSON.stringify(this.state))
      AsyncStorage.setItem('Active', this.state.email)
      console.log('Записал')
    } catch (error) {
      console.log(error)
    }
  };

  render(){
    const { navigate } = this.props.navigation
    return (
    
      <View style={styles.container}>
        <ScrollView style={{ width: '100%'}}>
        <StatusBar color={'#003f5c'} />
        <TouchableOpacity onPress={() => {navigate('goBack')}}>
            <AntDesign name="down" size={35} color="#fb5b5a" style={{ position: 'absolute', marginTop: 37, marginLeft: 15}}/>
        </TouchableOpacity>
        
        <Text style={styles.logo}>Регистрация</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Имя" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({firstName:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Фамилия" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({lastName:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Отчество" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({middleName:text})}/>
        </View>
        <View style={{ width: '70%', flexDirection: 'row', alignSelf: 'center', marginBottom: 10 }}>
            <Text style={{ color: 'white', marginRight: 15, paddingTop: 6, fontFamily: 'Yanone', fontSize: 17}}>Пол:</Text>
                <Text style={{color: 'white', paddingTop: 6, fontFamily: 'Yanone', fontSize: 17}}>М</Text>
                <RadioButton
                value="male"
                status={ this.state.gender === 'male' ? 'checked' : 'unchecked' }
                onPress={() => this.setState({gender: 'male'})}
                />
                <Text style={{color: 'white', marginLeft: 10, paddingTop: 6, fontFamily: 'Yanone', fontSize: 17}}>Ж</Text>
                <RadioButton
                value="female"
                status={ this.state.gender === 'female' ? 'checked' : 'unchecked' }
                onPress={() => this.setState({gender: 'female'})}
                />    
        </View>
        <View style={{ width: '80%', height: 50, borderRadius: 25, backgroundColor: "#465881", alignSelf: 'center', marginBottom: 20}}>
            <DatePicker
            style={{alignSelf: 'center', height: 50, width: '100%'}}
            mode="date"
            placeholder="Дата рождения"
            format="YYYY-MM-DD"
            minDate="1900-05-01"
            maxDate="2014-01-01"
            showIcon={false}
            customStyles={{
                dateInput:{
                    borderWidth: 0,
                    width: '100%'
                },
                placeholderText:{
                    color: 'white',
                    opacity: 0.8,
                    fontFamily: 'Yanone',
                    fontSize: 17, 
                    textAlign: 'left',
                    width: '86%',
                    paddingTop: 7
                }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
            />    
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Пароль" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Повторите пароль" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({confirm:text})}/>
        </View>
        {this.state.password === this.state.confirm && this.state.password !== '' && this.state.firstName !== ''
        && this.state.lastName !== '' && this.state.middleName !== '' && this.state.email !== '' ?
        <TouchableOpacity style={styles.loginBtn} onPress={() => 
            {this._storeData()
            this.props.navigation.navigate('Other')
            }}>
          <Text style={styles.loginText}>ЗАРЕГИСТРИРОВАТЬСЯ</Text>
        </TouchableOpacity> :
        <TouchableOpacity style={{fontFamily: 'Yanone',
        fontSize: 40,
        width:"70%",
        backgroundColor:"gray",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
        marginBottom:20,
        alignSelf: 'center'}}>
          <Text style={styles.loginText}>ЗАРЕГИСТРИРОВАТЬСЯ</Text>
        </TouchableOpacity>}
        
        </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  logo:{
    fontFamily: 'Yanone',
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40,
    marginTop: 20,
    alignSelf: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    alignSelf: 'center'
  },
  inputText:{
    fontFamily: 'Yanone',
    fontSize: 17,
    height:50,
    color:"white",
    opacity: 0.8
  },
  loginBtn:{
    fontFamily: 'Yanone',
    fontSize: 40,
    width:"70%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:25,
    marginBottom:20,
    alignSelf: 'center'
  },
  loginText:{
    fontFamily: 'Yanone',
    color:"white"
  }
});