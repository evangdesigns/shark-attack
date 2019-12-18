import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import './gravestone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
    deadStudents: PropTypes.func,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="gravestone">
        <h5 className="title">{student.firstName}<br/>{student.lastName}</h5>
      </div>
    );
  }
}

export default GraveStone;
