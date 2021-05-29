import {
    EMAIL_LIST_REQUEST,
    EMAIL_LIST_SUCCESS,
    EMAIL_LIST_FAIL
} from './emailConstants';

export const emailListReducer = (state = { emails: [] }, action) => {
    switch (action.type) {
      case EMAIL_LIST_REQUEST:
        return { loading: true, emails: [] }
      case EMAIL_LIST_SUCCESS:
        return {
          loading: false,
          emails: action.payload,
        }
      case EMAIL_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}