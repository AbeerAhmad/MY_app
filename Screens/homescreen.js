import React, { Component } from 'react';
import { Button } from 'react-native'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { Container, Text, View } from 'native-base';
import allitems from '../store/actions/action_items'
class HomeScreen extends Component {
  componentWillMount() {

    let database = firebase.database
    let data = database().ref('items');
    data.on('value', (snapshot) => {
      let ndata = snapshot.val();
      console.log(ndata)
      this.props.dispatch(allitems(ndata))

    })
  }
  render() {
    const { friends } = this.props
    return (
      <View>
        <Button
          title="Go to Items" style={{ width: '40%', height: 50 }}
          onPress={() => this.props.navigation.navigate('Itemlist')}
        />
      </View>

    );
  }
}
const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
}

export default connect(mapStateToProps)(HomeScreen)