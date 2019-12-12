import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

class LiveStudents extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
    liveStudents: PropTypes.func,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card col-4">
        <h5 className="card-title">{student.firstName}<br/>{student.lastName}</h5>
      </div>
    );
  }
}

export default LiveStudents;
