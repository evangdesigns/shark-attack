import React from 'react';
import PropTypes from 'prop-types';
import LiveStudents from '../liveStudents/liveStudents';
import studentShape from '../../helpers/propz/studentShape';
import './sharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
    sharkAttack: PropTypes.func,
    followTheLight: PropTypes.func,
  }

  sharkAttackEvent = (e) => {
    const { liveStudents, followTheLight } = this.props;
    const random = liveStudents[Math.floor(Math.random() * liveStudents.length)];
    e.preventDefault();
    followTheLight(random.id);
  }

  render() {
    const disableButton = {};
    const { liveStudents } = this.props;
    const studentCards = liveStudents.map((student) => <LiveStudents key={student.id} student={student} />);
    const hasStudents = liveStudents.length > 0;
    if (hasStudents) {
      disableButton.disabled = false;
    } else {
      disableButton.disabled = true;
    }

    return (
      <div>

        <button className="btn btn-danger" {...disableButton} onClick={this.sharkAttackEvent} >SHARK ATTACK!!</button>
        <div className="d-flex flex-wrap justify-content-between tank">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
