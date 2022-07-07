import React, {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button'; 
  
class App extends Component {
  render(){
    return (
      <div className="App"> 
        <br />
        <Button variant="contained" color="primary" 
                size="large">
            GeeksforGeeks
        </Button>     
    </div>
      
    ); 
  }
   
}
  
export default App;
