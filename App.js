import React from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';
import Svg from 'react-native-svg'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      countries: [] }
  }

  renderItem = ({item}) => {
    console.log('#item', item)
    return(
      <View>
        <Text>
          {item.name}
        </Text>
        <Text>
          {item.capital}
        </Text>
        <Svg  width="300"
              height="200">
          {item.flag}
        </Svg>
      </View>
      
    )
      
  }

  componentDidMount () {
    const url = 'http://restcountries.eu/rest/v2/all';
    fetch(url)
    .then((res) => res.json())
    .then((resjson) => 
      this.setState({
        countries: resjson
      })
      // console.log(resjson)
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigBlue}>Liste des pays</Text>
        <FlatList style={styles.list}
        data={this.state.countries}
        renderItem={this.renderItem}
        />
        <Svg/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'powderblue'
  },
  bigBlue: {
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'steelblue',
    borderRadius: 5,
  },
  list: {
    paddingVertical: 30,
  }
})

export default App;