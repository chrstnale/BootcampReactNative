import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const DATA = [
    {
        id: 0,
        inputTitle: 'Email',
        placeholder: 'Type your email',
    },
    {   
        id: 1,
        inputTitle: 'Password',
        placeholder: 'Type your password',
    },
  ];

// const extractKey = ({ id }) => id

export default class App extends Component {
    // constructor() {
    //     super();
    //     this.state = { 
    //       value: '',
    //     };
    // }

    renderItem = ({ item }) => {
        return (
            <View style={styles.input}>
                <Text style={styles.inputTitle}>{item.inputTitle}</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding:10}}
                    // onChangeText={(text) => this.setState({ value: text })}
                    // value={this.state.value}
                    placeholder={item.placeholder}
                />
            </View>
        )
      }
  
    render() {

    return (
      <View style={styles.container}>

          <View style={styles.logo}>
            <Image source={require('./images/logo.png')} style={{ width: 100, height: 100 }} />
            <Text style={styles.title}>ShowSkill</Text>
          </View>

          <View style={styles.form}>
                <FlatList
                    data={DATA}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                />
                <Text style={{textAlign:'center'}}>Forget your Password? <Text style={{fontWeight:'bold'}}>Reset here</Text></Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onPress()}
                >
                    <Text>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={{textAlign:'center'}}>Don’t have any account? <Text style={{fontWeight:'bold'}}>Sign up</Text></Text>
          </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
  },
  logo : {
    alignItems: 'center',
  }, 
  title: {
      margin: 25,
      fontSize: 30,

  },
  form: {
    marginHorizontal: 40,
  },
  input: {
    marginVertical: 10
  },
  inputTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 50,
    marginBottom: 10,
  },
});