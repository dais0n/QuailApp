import { db } from '../../plugins/firebase'

import {
  TAPE_TASK_FETCH_SUCCESS
} from './types'

export const getAllTapeTask = () => {
  return (dispatch) => {
    // TODO: start notification for loading
    db.collection('tape').doc('8d35Rqtmy3W932UIHBQe').collection('task').get().then((res) => {
      const taskList = []
      res.forEach((doc) => {
        taskList.push(doc.data())
      })
      fetchTapeTaskSuccess(dispatch, taskList)
    })
  };
};

const fetchTapeTaskSuccess = (dispatch, taskList) => {
  // フィード情報取得成功時のアクションを実行する
  dispatch({ type: TAPE_TASK_FETCH_SUCCESS, payload: taskList });
};
