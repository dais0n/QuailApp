import React, { Component } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getAllTapeTask } from '../../redux/actions';
import { ListItem, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class TaskScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="tasklist" style={{ color: tintColor }} size={25} />
    ),
  }

  componentWillMount() {
    this.props.getAllTapeTask(this.props.uid);
  }

  render() {
    const { tapeTaskList } = this.props
    if (tapeTaskList != null) {
      console.log(tapeTaskList)
      return (
        <View>
          <Header />
            {
              tapeTaskList.map((t, i) => (
                <ListItem
                  key={i}
                  leftIcon={<FontAwesome name={t.mark} size={20} color="#900"/>}
                  title={t.rank + "級"}
                  subtitle={t.angle + "°"}
                  badge={{ status: "success", value: "完登" }}
                  containerStyle={{ borderBottomWidth: StyleSheet.hairlineWidth, height: 70 }}
                />
              ))
            }
        </View>
      )
    } else {
      return (
        <View>
          <Text>Logged in....</Text>
        </View>
      )
    }
  }
}

const mapStateToProps = ({ tapeTask, user }) => {
  const { tapeTaskList } = tapeTask
  const { uid } = user
  return { tapeTaskList, uid };
};

export default connect(mapStateToProps, { getAllTapeTask })(TaskScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
