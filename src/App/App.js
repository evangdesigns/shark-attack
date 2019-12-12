import React from 'react';
import './App.scss';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/sharkTank/sharkTank';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    students: [],
    liveStudents: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });
    const liveStudents = studentData.isAlive();
    this.setState({ liveStudents });
  }

  render() {
    return (
      <div className="App">
        <div className="d-flex justify-content-center">
          <div className="col-6">
            <h1 className="text-center">Shark Tank</h1>
            <SharkTank liveStudents={this.state.liveStudents} />
          </div>
          <div className="col-6">
            <h1 className="text-center">Grave Yard</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
