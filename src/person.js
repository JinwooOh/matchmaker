import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component{
  constructor(){
    super();
    this.state = {
      sex: '',
      preferences: ''
    };
  }
  updateInfo = ()=>{
    this.setState({
      sex: this.props.personSex,
      preferences: this.props.personPre
    });
  };

  render(){
    return(
      <div>
      </div>
    );
  }
}

export default Person;
