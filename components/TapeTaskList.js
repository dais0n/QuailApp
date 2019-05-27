import React, { Component } from "react";
import { Text } from "react-native";
import { Body, ListItem, Left, Right, Badge, ActionSheet } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

var BUTTONS = ["完登", "トライ中", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class TapeTaskList extends Component {

  checkDoneStatus() {
    // const { userId } = this.props
    // if (users != null) {
    //   return <Badge success><Text>完</Text></Badge>
    // }
  }

  render() {
    const { mark, angle, rank } = this.props.task
    return (
      <ListItem style={{ height: 75 }} onPress={
        () => ActionSheet.show(
          {
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
            title: "課題の進捗を入力してください"
          },
          (buttonIndex) => {
            this.setState({ clicked: BUTTONS[buttonIndex] });
          }
        )}
      >
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
          {this.checkDoneStatus()}
        </Right>
      </ListItem>
    );
  }
}

export default TapeTaskList;
