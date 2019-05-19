import React, { Component } from "react";
import { 
    Text,
    StyleSheet
} from "react-native";
import {Body, ListItem, Left } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

class TapeTaskList extends Component {
    render() {
        const { mark, angle, rank } = this.props.task;
        return (
            <ListItem style={{ height: 75 }}>
                <Left>
                    <Icon name={mark} size={25} />
                </Left>
                <Body>
                    <Text>{angle}°</Text>
                </Body>
                <Body>
                    <Text>{rank}級</Text>
                </Body>
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