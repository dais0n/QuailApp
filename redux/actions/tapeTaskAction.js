import { db } from '../../plugins/firebase'

import {
  TAPE_TASK_FETCH_SUCCESS
} from './types'

export const getAllTapeTask = (uid) => {
  return (dispatch) => {
    // TODO: start notification for loading
    // get all tasks
    db.collection('tape').doc('8d35Rqtmy3W932UIHBQe').collection('task').get().then((res) => {
      const taskList = []
      res.forEach((doc) => {
        // get task status
        // const status = db.collection('tape').doc('8d35Rqtmy3W932UIHBQe').collection('task').doc(doc.id)
        //   .collection('user').doc(uid)
        // if (status.exists) {
        //   console.log(status)
        // }
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
