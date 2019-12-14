import React from 'react';
import PropTypes from 'prop-types';
import LiveStudents from '../liveStudents/liveStudents';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
    sharkAttack: PropTypes.func,
    followTheLight: PropTypes.func,
  }

  sharkAttackEvent = (e) => {
    const { liveStudents } = this.props;
    const random = liveStudents[Math.floor(Math.random() * liveStudents.length)];
    console.log(random.id);
    e.preventDefault();
    // followTheLight(random.id);
  }

  render() {
    const livingStudents = this.props.liveStudents;
    const studentCards = livingStudents.map((student) => <LiveStudents key={student.id} student={student} />);

    return (
      <div>
        <div className="btn btn-danger"onClick={this.sharkAttackEvent} >SHARK ATTACK!!</div>
        <div className="d-flex flex-wrap justify-content-between">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
