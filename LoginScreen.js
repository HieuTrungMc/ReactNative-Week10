import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import BikeList from './BikeList'
// You can import supported modules from npm
import { Card } from 'react-native-paper';


// or any files within the Snack


const LoginScreen = () => {
  const navigation = useNavigation();
  function toBikeList() {
  navigation.navigate('BikeList')
}
  return (
    <View style={styles.container}>
    <Text style={styles.title} >A premium online store for sporter and their stylish choice</Text>
    <SafeAreaView style={styles.imageview}>
    <Image style = {{            
      resizeMode: 'cover',
      height:210,
      width: 220,}} source={require('./assets/bike.png')} />
    </SafeAreaView>
    <Text style={{textAlign: 'center', width: '40%', fontWeight:'bold', fontSize: 30, marginBottom: 60}}> POWER BIKE SHOP</Text>
    <TouchableOpacity style={styles.button} onPress={toBikeList}>
    <Text style={styles.getstarted}>GET STARTED </Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20
  },
  button: {
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  title: {
    width: '67%',
    textAlign: 'center',
    fontFamily: 'Consolas',
    fontSize: 19,
    fontWeight: 'bold',
    textDecorationColor: 'magenta',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
    
    
  },
  imageview: {
    width: 280,
    height: 280,
    borderCurve: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E941414A',
    padding: 8,
    marginBottom: 10
  },
  getstarted: {
    fontFamily: 'Consolas',
    fontWeight: 'bold', 
    fontSize: 21,
    color: 'white'
  }
});

export default LoginScreen;
