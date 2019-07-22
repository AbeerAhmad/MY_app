import React, { Component } from 'react';
import { Image ,} from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, View } from 'native-base';

import { connect } from 'react-redux'
class Itemlist extends Component {
  state = {
    items: [{
      name: 'ali ahmad is the good person '
    }, {
      name: 'abeer'
    }, {
      name: 'abeel'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }]
  }
  componentDidMount(){
    console.log(this.props.items)
  }
  render() {
    const items = this.props.items
    console.log(items)

    const cards = items.map((item, i) => {
      return (
        <Card style={{
          width: '48%',padding:0}} key={i}>
          <CardItem cardBody >

            <Image source={{uri:item.image_url}} style={{ width: '100%', height: 150 }} />
          </CardItem>
          <CardItem style={{paddingLeft:5}} cardBody>
            <Text numberOfLines={1} style={{fontFamily:'Arial, Helvetica, sans-serif',fontSize:12}}>{item.item_name}</Text>

          </CardItem>
          <CardItem  cardBody style={{paddingLeft:5}} >
            <Text style={{fontSize:15}}>Rs:{item.item_price}</Text>
            <Text style={{fontSize:10,textDecorationLine:'line-through',color:'grey',paddingLeft:5}}>Rs:1500</Text>
          </CardItem>
          <CardItem cardBody style={{paddingLeft:5}} >
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }} style={{ padding: 0, }}>
                <Icon name="heart" type='EvilIcons'/>
              </Button>
              <Button transparent textStyle={{ color: '#87838B' }} style={{ padding: 0 }}>
                <Icon name="cart" type='EvilIcons' fontSize='50' />
              </Button>
            </Left>
          </CardItem>
        </Card>

      )
    })
    return (
      <Container>
        <Content >
          <View style={{ display: 'flex', flexDirection: 'row', flex: 1, flexWrap: 'wrap', justifyContent: 'flex-start',alignItems:'center' }}>
            {cards}
          </View>
        </Content>
      </Container>

    );
  }
}
const mapStateToProps = (state) => {
  const { items } = state
  return { items }
}

export default connect(mapStateToProps)(Itemlist)