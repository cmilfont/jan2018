import actions from 'api/actions';

export default (state = {}, action) => {

  switch (action.type) {
    case actions.LOGIN_USER_SUCCESSFUL:
      return action.payload;
    case actions.UPDATED_FORM:
      return {
        ...state,
        ...action.payload,
      };
    case actions.LOGIN_USER_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }

}