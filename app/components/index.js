import React, { Component } from 'react'; 
import { getUsers } from 'api/RandomUsers';
import ISO from 'api/ISO';
import UserCardList from 'components/UserCardList';

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

        const currentUsers = this.state.users;
        
        return (
          <div>
              <div>
                <h3>
                    { this.state.users.length } people attend to { this.state.eventName }  
                </h3>    
              </div>  
              <div className="row">
                  <div className="col-lg-12">
                        <div className="card-columns">
                            <UserCardList
                            users = { currentUsers }
                            />
                        </div>
                  </div>
              </div>      
          </div>    
        );
    }
}
