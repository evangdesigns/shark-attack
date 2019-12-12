import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from '../gravestone/gravestone';
import studentShape from '../../helpers/propz/studentShape';

class GraveYard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const dedStudents = this.props.deadStudents;
    const studentCards = dedStudents.map((student) => <GraveStone key={student.id} student={student} />);

    return (
      <div className="d-flex flex-wrap justify-content-between">
        {studentCards}
      </div>
    );
  }
}

export default GraveYard;
