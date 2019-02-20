import React, {Component} from 'react';
import './App.css';
import Github from "./github";
import InputName from "./github/InputName";
import axios from 'axios';

class App extends Component {
   state = {data : ''};
   github = {user: ''};

   addUser = (user) => {
       this.setState({
                user: [...this.github.user, user]
       })
       axios.get(`https://api.github.com/users/${user}`)
           .then(response => {
               this.setState({data: response.data})
               console.log(response.data)
           })
   }

   render() {   
       return (
           <div className="App">
               <h1>Enter Github Name</h1>
               <InputName addUser={this.addUser} />

               <Github data={this.state.data}/>
               <br/>
           </div>
       );
   }
}

export default App;