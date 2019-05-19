import { db } from '../../plugins/firebase'

import {
  TAPE_TASK_FETCH_SUCCESS
} from './types'

export const getAllTapeTask = () => {
  return (dispatch) => {
    // TODO: start notification for loading
    // fetch from firestore
    db.collection('tapes').get().then((res) => {
      res.forEach((doc) => {
        if (doc.id == 'Ior0ohFQlnLUNnUnQ8VW') {
          fetchTapeTaskSuccess(dispatch, doc.data())
        }
      })
    })
  };
};

const fetchTapeTaskSuccess = (dispatch, taskList) => {
  // フィード情報取得成功時のアクションを実行する
  dispatch({ type: TAPE_TASK_FETCH_SUCCESS, payload: taskList });
};
