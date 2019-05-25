import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAllTapeTask } from '../../redux/actions';

import { Container, Content, Header, List, Spinner } from 'native-base'
import Icon from 'react-native-vector-icons/Octicons'
import TapeTaskList from '../TapeTaskList'

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
    const { tapeTaskList, uid } = this.props
    if (tapeTaskList != null) {
      return (
        <Container>
          <Header />
          <Content>
            <List>
              {
                tapeTaskList.tasks.map((task, index) => {
                  return (
                    <TapeTaskList key={index} task={task} userId={uid} />
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
        <Header />
        <Content>
            <Spinner color='green' />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({ tapeTask, user }) => {
  const { tapeTaskList } = tapeTask
  const { uid } = user
  return { tapeTaskList, uid };
};

export default connect(mapStateToProps, { getAllTapeTask })(TaskScreen);
