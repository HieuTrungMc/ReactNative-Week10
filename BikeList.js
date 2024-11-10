import {
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Card } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const imageMap = {
  '1.png': require('./assets/1.png'),
  '2.png': require('./assets/2.png'),
  '3.png': require('./assets/3.png'),
  '4.png': require('./assets/4.png'),
  '5.png': require('./assets/5.png'),
  '6.png': require('./assets/6.png'),
};
const data = [
  {
    id: 1,
    name: 'Pinarello',
    price: '1800',
    imgPath: require('./assets/1.png'),
  },
  {
    id: 2,
    name: 'Pina Mountai',
    price: '1700',
    imgPath: require('./assets/2.png'),
  },
  {
    id: 3,
    name: 'Pina Bike',
    price: '1500',
    imgPath: require('./assets/3.png'),
  },
  {
    id: 4,
    name: 'Pinarello',
    price: '1900',
    imgPath: require('./assets/4.png'),
  },
  {
    id: 5,
    name: 'Pinarello',
    price: '2700',
    imgPath: require('./assets/5.png'),
  },
  {
    id: 6,
    name: 'Pinarello',
    price: '1350',
    imgPath: require('./assets/6.png'),
  },
];

export default function BikeList() {
  const renderBike = ({ item }) => {
    return (
      <View style={{ width: '50%' }}>
        <View
          style={{
            backgroundColor: '#dde3b3',
            borderRadius: 10,
            width: '95%',
            height: '95%',
          }}>
          <View style={styles.itemBox}>
            <Image source={imageMap[item.imgPath]} />
            <Image />
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
            <Text style={{ color: 'gray' }}>$</Text>
            <Text style={styles.itemShopName}>{item.price}</Text>
          </View>
        </View>
      </View>
    );
  };
  const renderCategories = ({ item }) => {
    return(
      <View>
      <Text>{item.name}</Text>
      </View>

    )

  }
  const [bikes, setBikes] = useState([]);
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    fetch('https://6730222766e42ceaf15f7512.mockapi.io/bikestores/listBikes')
      .then((response) => response.json())
      .then((data) => setBikes(data))
      .catch((error) => console.error(error));

      fetch('https://6730222766e42ceaf15f7512.mockapi.io/bikestores/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>The world's Best Bike</Text>
      <FlatList
        style={styles.listView}
        data={bikes}
        renderItem={renderBike}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'left',
    color: '#E94141',
    fontWeight: 'bold',
    fontSize: 25,
    bottom: 15,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  listView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBox: {
    flex: 1,
    margin: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
});
