import React, { Component } from "react";
import { Text, StyleSheet, } from "react-native";
import { connect } from 'react-redux';
import { getAllTapeTask } from '../../redux/actions';

import { Container, Content, Header, List, View } from 'native-base'
import Icon from 'react-native-vector-icons/Octicons'
import TapeTaskList from '../TapeTaskList'

const tapeTasksList = [
  { mark: "close", angle: "100", rank: 4 },
  { mark: "minus", angle: "90", rank: 5 },
  { mark: "arrow-up", angle: "90", rank: 3 }
];

class TaskScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="tasklist" style={{ color: tintColor }} size={25} />
    ),
  }

  componentWillMount() {
    this.props.getAllTapeTask();
  }

  render() {
    const { tapeTaskList } = this.props
    if (tapeTaskList != null) {
      return (
        <Container>
          <Header />
          <Content>
            <List>
              {
                tapeTaskList.tasks.map((task, index) => {
                  return (
                    <TapeTaskList key={index} task={task} />
                  )
                })
              }
            </List>
          </Content>
        </Container>
      );
    }
    return (
      <Container>
        <Content>
          <Text>loading</Text>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = ({ tapeTask }) => {
  const { tapeTaskList } = tapeTask
  console.log("fuga",tapeTaskList)
  return { tapeTaskList };
};

export default connect(mapStateToProps, { getAllTapeTask })(TaskScreen);
