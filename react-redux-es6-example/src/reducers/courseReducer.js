import * as types from '../actions/actionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    case types.LOAD_COURSES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
