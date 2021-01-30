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

const SOCMED = [
    {
        id: 0,
        platform: 'WhatsApp',
        name: '6124810234',
        logo: require('./images/logo-whatsapp.png'),
    },
    {   
        id: 1,
        platform: 'Instagram',
        name: 't_chavez',
        logo: require('./images/logo-instagram.png'),
    },
    {
        id: 2,
        platform: 'Linkedin',
        name: 'toddchavez',
        logo: require('./images/logo-linkedin.png'),
    },
  ];

  const PROJECT = [
    {
        id: 0,
        platform: 'Android App',
        name: 'Sanber App',
        logo: require('./images/logo-github.png'),
    },
    {   
        id: 1,
        platform: 'Mobile App Design',
        name: 'Better Any Do',
        logo: require('./images/logo-behance.png'),
    },
    {
        id: 2,
        platform: 'E-commerce Website',
        name: 'Sepatuku',
        logo: require('./images/logo-github.png'),
    },
  ];

export default class App extends Component {
    // constructor() {
    //     super();
    //     this.state = { 
    //       value: '',
    //     };
    // }

    renderItem = ({ item }) => {
        return (
            <View style={styles.list} >
              <Image source={item.logo} style={{ width: 40, height: 40, marginRight: 10 }} />
              <View style={{flexDirection:'column', width: 180}}>
                <Text style={styles.platform}>{item.platform}</Text>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <Image source={require('./images/link.png')} style={styles.linkLogo} />
              
            </View>
            
        )
      }
  
    render() {

    return (
      <View style={styles.container}>
          <Image source={require('./images/back.png')} style={{ width: 25, height: 25, marginLeft: 5, marginBottom: 10 }} />

          <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 20}}>About Developer</Text>

          <View style={styles.logo}>
            <Image source={require('./images/devPhoto.png')} style={{ width: 100, height: 100 }} />
            <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>Todd Chavez</Text>
            <Text style={{textAlign: 'center', fontSize: 20}}>Showskill Developer</Text>
          </View>

          <View style={styles.form}>
                <Text style={styles.subtitle}>Social Media</Text>
                <FlatList
                    data={SOCMED}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                />
          </View> 

          <View style={styles.form}>     
                <Text style={styles.subtitle}>Project</Text>
                <FlatList
                    data={PROJECT}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                />
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
  subtitle: {
    color: 'gray',
    fontSize: 20,
  },
  form: {
    marginHorizontal: 40,
    marginVertical: 20,
  },
  input: {
    marginVertical: 10
  },
  platform: {
    textAlign: 'left',
    color: 'gray'
  },
  name: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 50,
    marginBottom: 10,
  },
  list: {
    marginBottom: 3,
    flexDirection:'row',
  },
  linkLogo: {
     width: 35, 
     height: 35,
     alignItems: 'flex-end',
  }
});