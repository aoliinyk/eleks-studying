import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

// action creator
export function createCourse(course) {
  return {type: types.CREATE_COURSE, payload: course};
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, payload: courses};
}

// for redux-thunk
export function loadCourses() {
  return function(dispatch) {
    // dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
