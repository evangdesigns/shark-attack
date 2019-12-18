import React from 'react';
import './App.scss';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/sharkTank/sharkTank';
import GraveYard from '../components/graveyard/graveyard';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    students: [],
    liveStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });

    const liveStudents = studentData.livingStudents();
    this.setState({ liveStudents });

    const deadStudents = studentData.dearlyBeloved();
    this.setState({ deadStudents });
  }

  followTheLight = (studentId) => {
    studentData.followTheLight(studentId);
    this.setState({
      deadStudents: studentData.dearlyBeloved(),
      liveStudents: studentData.livingStudents(),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="d-flex">
          <div className="col-6">
            <h1 className="text-center">Shark Tank</h1>
            <SharkTank liveStudents={this.state.liveStudents} followTheLight={this.followTheLight} />
          </div>
          <div className="col-6">
            <h1 className="text-center">Grave Yard</h1>
            <GraveYard deadStudents={this.state.deadStudents} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
