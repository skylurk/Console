import React from 'react'

const UserSummary = ({ user }) => {
    return (
        <div className="card z-depth-0 user-summary">
            <div className="card-content gret-text text-darken-3">
                <span className="card-title">{user.title} </span>
                <p>{user.position}</p>
                <p className="grey-text">4th May, 3am</p>
            </div>
        </div>
    )
} 

export default UserSummary