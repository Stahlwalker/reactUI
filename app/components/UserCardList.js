import React, { Component } from 'react'; 
import UserCard from 'components/UserCard';

export default class UserCardList extends Component {

render() {
    const cards = this.props.users.map((user, index) => {
        return <UserCard 
        key = { index }
        user = { user }
        />;
    });
    return (
        <div>
            { cards }
        </div>    
    )
    }
}
