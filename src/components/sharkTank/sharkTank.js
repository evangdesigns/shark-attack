import React from 'react';
import PropTypes from 'prop-types';
import LiveStudents from '../liveStudents/liveStudents';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const livingStudents = this.props.liveStudents;
    console.log(livingStudents);
    const studentCards = livingStudents.map((student) => <LiveStudents key={student.id} student={student} />);

    return (
      <div className="d-flex flex-wrap justify-content-between">
        {studentCards}
      </div>
    );
  }
}

export default SharkTank;
