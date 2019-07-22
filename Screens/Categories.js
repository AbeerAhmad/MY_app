import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon, Button } from 'native-base';
export default class Categories extends Component {
  state = {
    items: ['abeer', 'Wadood ', 'Usama']
  }
  render() {
    const { items } = this.state
    const list = items.map((ads, i) => {
      return <List key={i}>
        <ListItem noIndent style={{height:60}} >
          <Left>
            <Text>{ads}</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      </List>
    })
    return (
      <Container>
        <Content>
         {list}
        </Content>
      </Container>
    );
  }
}