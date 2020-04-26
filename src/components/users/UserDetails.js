import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const UserDetails = (props) => {
    const { user } = props;
    if(user) {
        return (
        <div className="container section user-details">
            <div className="card z-depth-0">
                <div className="card-content">
        <span className="card-title"> { user.firstName } {user.lastName} </span>
                    <p>{ user.title } </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{ user.position }</div>
                    <div>3rd April, 4pm</div>
                </div>
            </div>
        </div>
        )
    }else{
        return (
            <div className="container center">
                <p>Loading user...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id
    const users = state.firestore.data.users;
    const user = users ? users[id] : null
    return {
       user: user 
    }
}

export default compose( 
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users'}
    ])
)(UserDetails)