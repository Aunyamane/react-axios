import React, {Component}  from 'react';

class InputName extends Component {

   state = { user :''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div>
               <input type="text" name="user" onChange={this.handleChange} /> <br/><br/>
               <button onClick={() => this.props.addUser(this.state.user)}>Fetch User</button>
           </div>
       )
   }
}

export default InputName