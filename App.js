import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

export default function App() {
  const [data, setData] = useState();

  const fetchApiCall = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(post => {
        setData(post)
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Native API Calls</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Use Fetch API</Text>
        </View>
      </TouchableHighlight>
      <View>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
              <Text><Text style={styles.ti}>Title:</Text>{item.title}</Text>
              <Text><Text style={styles.bo}>Body:</Text>{item.body}</Text>
            </View>

          )}
        />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  title: {
    fontSize: 35,
    color: '#fff'
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#0645AD'
  },
  buttonText: {
    color: '#fff'
  },
  ti: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: `#a52a2a`
  },
  bo: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: `#a52a2a`
  }
});