import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

//  implementation for REDUX!
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // course reducer
  };
}

function mapDispatchToProps(dispatch) {
  // return {
  //   createCourse: (course) => dispatch(courseActions.createCourse(course))
  // };
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
