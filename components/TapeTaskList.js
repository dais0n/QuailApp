import React, { Component } from "react";
import {
    Text,
    StyleSheet
} from "react-native";
import {Body, ListItem, Left, Right, Badge } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import { __values } from "tslib";

class TapeTaskList extends Component {

  checkDoneStatus() {
    const { userId } = this.props
    const { users } = this.props.task
    if (users != null) {
      if(users.some(user=> user.id === userId)) {
        return <Badge success><Text>完</Text></Badge>
      }
    }
  }

  render() {
    const { mark, angle, rank, users } = this.props.task
    return (
      <ListItem style={{ height: 75 }} onPress={() => console.log("test")} >
        <Left>
          <Icon name={mark} size={25} />
        </Left>
        <Body>
          <Text>{angle}°</Text>
        </Body>
        <Body>
          <Text>{rank}級</Text>
        </Body>
        <Right>
          { this.checkDoneStatus() }
        </Right>
      </ListItem>
    );
  }
}

export default TapeTaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
