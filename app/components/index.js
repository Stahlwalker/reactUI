import React, { Component } from 'react'; 
import { getUsers } from 'api/RandomUsers';

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: 'React Event',
            users: []
        };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
         getUsers(6, users => {
             this.setState({
                 users
             });
         })
    }

    render() {
        return (
          <div>
              <div>
                <h3>
                    { this.state.users.length } people attend to { this.state.eventName }  
                </h3>    
              </div>    
          </div>    
        );
    }
}
