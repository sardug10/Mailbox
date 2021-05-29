import axios from 'axios';
import {
    EMAIL_LIST_REQUEST,
    EMAIL_LIST_SUCCESS,
    EMAIL_LIST_FAIL
} from './emailConstants';

export const listEmails = () => async (
    dispatch
  ) => {
    try {
      dispatch({ type: EMAIL_LIST_REQUEST })
  
      const {data}  = await axios({
          method:'GET',
          url:'https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98'
      })

      dispatch({
        type: EMAIL_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: EMAIL_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
}