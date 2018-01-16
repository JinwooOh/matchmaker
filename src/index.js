import React from 'react';
import ReactDOM from 'react-dom';
// import Person from './person';

class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      male : [],
      female : [],
      sex:'male',//person's sex //default male
      preference:'',//person's preference list
      name: ''
    };
  }
  handeName = (e)=>{
    this.setState({
      name: e.target.value
    })
  }
  handleSex = (e) =>{
    this.setState({
      sex: e.target.value
    });
  }
  handlePreference = (e)=>{
    this.setState({
      preference: e.target.value
    });
  }

  addPerson = ()=>{
    let person = {
      name: this.state.name,
      preference: this.state.preference,
      sex: this.state.sex
    };
    console.log(person);

    if(person.sex === 'male'){
      let copyMale = this.state.male.slice();
      copyMale.push(person);
      this.setState({
        male: copyMale
      });
    }else{
      let copyFemale = this.state.female.slice();
      copyFemale.push(person);
      this.setState({
        female: copyFemale
      });
    }
  }
  showPreference =()=>{
    if(this.state.sex === 'male'){
      for(let i = 0; i < this.state.female.length; i++){
        <option value={this.state.female[i].name}>{this.state.female[i].name}</option>
      }
    }else{
      for(let i = 0; i < this.state.male.length; i++){
        <option value={this.state.male[i].name}>{this.state.male[i].name}</option>
      }
    }
  }



  render(){

    return(
      <div>
        <input onChange={this.handeName} placeholder="write person name"></input>
        <select value={this.state.sex} onChange={this.handleSex}>
           <option value="male">male</option>
           <option value="female">female</option>
        </select>
        <select value={this.state.preference} onChange={this.handlePreference}>
            {this.showPreference}
           // <option value="f1">female1</option>
           // <option value="f2">female2</option>
        </select>
        <button onClick={this.addPerson}>add person</button>
        {this.state.male.map((e,i)=>{return <li key={i}>{e.name} {e.sex} {e.preference}</li>})}
        {this.state.female.map((e,i)=>{return <li key={i}>{e.name} {e.sex} {e.preference}</li>})}

      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('main'));
