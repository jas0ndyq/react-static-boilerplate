import axios from 'axios';
import * as Type from './type';

function fetchDataAction (page, rows) {
  console.log('call fetchDataDispatch');
  return function (dispatch) {
    dispatch({
      type: Type.FETCH_POSTS,
      payload: {
        status: 'doing'
      }          
    });
    return axios.get(`/api/data/Android/${rows}/${page}`)
      .then(res => {
        if (res.data.error) {
          throw new Error('response error');
        }
        else {
          dispatch({
            type: Type.FETCH_POSTS,
            payload: {
              status: 'success',
              list: res.data.results
            }          
          });
        }
      })
      .catch(err => {
        dispatch({
          type: Type.FETCH_POSTS,
          payload: {
            status: 'error'
          }
        });        
      });
  };
}

export default fetchDataAction;