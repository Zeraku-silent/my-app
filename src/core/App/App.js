import './App.css';
import React from 'react';
import Fcomponent from './Fcomponent';
import List from './components/List/List';


class App extends React.Component {
  state = {
    tasks: [{id:1, content:'Первая таска', isCompleted:false}]
}

  render(){
    <List state = {this.state.tasks}/>
    return(
    <div className="App">
    <h1>{console.log(this.state)}</h1>
   
      </div>
    
  );
}
}

export default App;
