import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.courses, action) {
  switch (action.type) {
    // case types.CREATE_COURSE:
    //   return [
    //     ...state,
    //     Object.assign({}, action.payload)
    //   ];

    case types.LOAD_COURSES_SUCCESS:
      return action.payload;

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.payload.id),
        Object.assign({}, action.payload)
      ];

    default:
      return state;
  }
}
