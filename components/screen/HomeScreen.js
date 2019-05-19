import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import { Card, CardItem } from 'native-base'

import Icon from 'react-native-vector-icons/Octicons'

class HomeScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" style={{ color: tintColor }} size={25}/>
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}
export default HomeScreen 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});