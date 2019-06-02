import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { getAllTapeTask, updateTapeTaskStatus } from '../../redux/actions';
import { ListItem, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Modal from "react-native-modal";

class TaskScreen extends Component {

  state = {
    modalVisible: false,
    selectTaskId: null,
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="tasklist" style={{ color: tintColor }} size={25} />
    ),
  }

  colorInRank(rank) {
    var color = "black";
    switch (rank) {
      case "5":
        color = "red"
        break
      case "4":
        color = "yellow"
        break
      case "3":
        color = "blue"
        break
    }
    return color
  }

  componentWillMount() {
    this.props.getAllTapeTask(this.props.uid);
  }

  render() {
    const { tapeTaskList, uid } = this.props
    if (tapeTaskList != null) {
      return (
        <View>
          <Modal isVisible={this.state.modalVisible}>
            <View style={styles.content}>
              <Text style={styles.contentTitle}>ステータスを入力してください</Text>
              <Button
                onPress={() => {
                  this.props.updateTapeTaskStatus(uid, this.state.selectTaskId, 1)
                  this.setState({ modalVisible: false })
                }
                }
                title="完登"
              />
              <Button
                onPress={() => {
                  this.props.updateTapeTaskStatus(uid, this.state.selectTaskId, 2)
                  this.setState({ modalVisible: false })
                }
                }
                title="トライ中"
              />
              <Button
                onPress={() => {
                  this.props.updateTapeTaskStatus(uid, this.state.selectTaskId, 0)
                  this.setState({ modalVisible: false })
                }
                }
                title="取り消し"
              />
              <Button
                onPress={() => this.setState({ modalVisible: false })}
                title="Cancel"
              />
            </View>
          </Modal>
          <Header />
          {
            tapeTaskList.map((t, i) => {
              // make badge
              let badge = { status: null, value: "" }
              if (t.status === 1) {
                badge.status = "success"
                badge.value = "完登"
              } else if (t.status === 2) {
                badge.status = "warning"
                badge.value = "トライ中"
              }
              // make ListItem
              return (
                <ListItem
                  key={i}
                  leftIcon={<FontAwesome name={t.mark} size={20} color={this.colorInRank(t.rank)} />}
                  title={t.rank + "級"}
                  subtitle={t.angle + "°"}
                  badge={badge}
                  onPress={() => {
                    this.setState({ modalVisible: true, selectTaskId: t.id })
                  }
                  }
                  containerStyle={{ borderBottomWidth: StyleSheet.hairlineWidth, height: 70 }}
                />
              )
            })
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

export default connect(mapStateToProps, { getAllTapeTask, updateTapeTaskStatus })(TaskScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
