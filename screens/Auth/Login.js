import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, AsyncStorage, NativeModules } from 'react-native';

export default class Login extends React.Component {
  state={
    email:"",
    password:"",
    user: []
  }

  async checkLogin(){
    const user = await AsyncStorage.getItem(this.state.email)

    this.setState({user: JSON.parse(user)})
    if (this.state.password === this.state.user.password){
      AsyncStorage.setItem('Active', this.state.email)
      NativeModules.DevSettings.reload()
    }
  }

  render(){
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <StatusBar color={'#003f5c'} />
        <Text style={styles.logo}>Вход</Text>
        <Image source={require('../../assets/gerb.png')} style={{ width: 100, resizeMode: 'contain'}}/>
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
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.checkLogin()}>
          <Text style={styles.loginText}>ВОЙТИ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Register')}>
          <Text style={styles.loginText}>Зарегистрироваться</Text>
        </TouchableOpacity>

  
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
  },
  logo:{
    fontFamily: 'Yanone',
    fontSize:60,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    fontFamily: 'Yanone',
    fontSize: 17,
    height:50,
    color:"white",
    opacity: 0.8
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    fontFamily: 'Yanone',
    fontSize: 17,
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    fontFamily: 'Yanone',
    fontSize: 17,
    color:"white"
  }
});