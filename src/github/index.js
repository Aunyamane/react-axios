import React, {Component}  from 'react';

class Github extends Component {

   render() {
       if ( this.props.data )
                return ( <div>{this.props.data.id}: {this.props.data.login} <img src={this.props.data.avatar_url} alt="avatar" width="50px"/> </div> )
       return (<div></div>);
           
   }
}

export default Github