import React, { Component } from 'react'; 
import { getUsers } from 'api/RandomUsers';
import UserCardList from 'components/UserCardList';
import AddUserForm from 'components/AddUserForm';
import { without } from 'lodash';

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: 'React Event',
            users: [],
            isFormVisible: false
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

    removeUser(user) {
        const users = without(this.state.users, user);
        this.setState({
            users
        });
    }

    toggleFormVisibility() {
        this.setState({
            isFormVisible: !this.state.isFormVisible
        });
    } 

    render() {

        const currentUsers = this.state.users;
        
        return (

          <div>
              <div className="row mb-3">
                  <div className="col-lg-12">
                      <AddUserForm
                      handleToggleFormVisibility = { this.toggleFormVisibility.bind(this) }
                      isFormVisible = { this.state.isFormVisible }
                       />
                  </div>    
              </div>   

              <div>
                <h3>
                    { this.state.users.length } people attending to { this.state.eventName }  
                </h3>    
              </div>  

              <div className="row">
                  <div className="col-lg-12">
                        <div className="card-columns">
                            <UserCardList
                            users = { currentUsers }
                            handleRemoveUser = { this.removeUser.bind(this) }
                            />
                        </div>
                  </div>
              </div>      
          </div>    
        );
    }
}
