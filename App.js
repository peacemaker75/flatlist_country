import React from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';

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
        <FlatList
        data={this.state.countries}
        renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;