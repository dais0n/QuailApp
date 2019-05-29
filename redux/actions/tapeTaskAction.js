import { db } from '../../plugins/firebase'

import {
  TAPE_TASK_FETCH_SUCCESS
} from './types'

export const getAllTapeTask = (uid) => {
  return async (dispatch) => {
    // get all tasks
    db.collection('tape').doc('8d35Rqtmy3W932UIHBQe').collection('task').get().then((res) => {
      res.forEach(async (task) => {
        // get task status
        const userRef = db.collection('tape').doc('8d35Rqtmy3W932UIHBQe').collection('task').doc(task.id)
          .collection('user').doc(uid)
        // get status
        const status = await userRef.get()
        if (status.exists) {
          fetchTapeTaskSuccess(dispatch, Object.assign(task.data(), status.data()))
          return
        }
        fetchTapeTaskSuccess(dispatch, Object.assign(task.data(), {status: 0}))
      })
    })
  };
};

const fetchTapeTaskSuccess = (dispatch, taskList) => {
  // フィード情報取得成功時のアクションを実行する
  dispatch({ type: TAPE_TASK_FETCH_SUCCESS, payload: taskList });
};
