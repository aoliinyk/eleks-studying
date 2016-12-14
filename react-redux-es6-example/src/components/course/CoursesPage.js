import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course});
  }

  onClickSave(event) {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save" />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

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
