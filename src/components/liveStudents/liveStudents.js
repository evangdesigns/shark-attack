import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import './liveStudents.scss';

class LiveStudents extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
    liveStudents: PropTypes.func,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="lifeRaft">
        <h5 className="card-title align-middle">{student.firstName}<br/>{student.lastName}</h5>
      </div>
    );
  }
}

export default LiveStudents;
