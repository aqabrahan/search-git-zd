import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, TouchableHighlight, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  btnDisabled: {
    backgroundColor: '#ccc',
  }
});

const Home = props => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    setUsername(event.nativeEvent.text);
  }
  const handleSubmit = () => {
    console.log('submit---', username)
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>
        Search for a Github User
      </Text>
      <TextInput
        style={styles.searchInput}
        value={username}
        onChange={handleChange}
      />
      <TouchableHighlight
        style={[styles.button, username === '' ? styles.btnDisabled : '']}
        onPress={handleSubmit}
        underlayColor="white"
        disabled={username === ''}
      >
        <Text style={styles.buttonText}>SEARCH</Text>
      </TouchableHighlight>
      <ActivityIndicator animating={isLoading} size="large" color="#0000ff" />
      {error && <Text>error</Text>}
    </View>
  )
}


Home.propTypes = {

}

export default Home;
