import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/userActions'

class CreateUser extends Component {
    state = {
        email: '',
        password: '',
        positon: '',
        department: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.createUser(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="grey lighten-4">
                    <h5 className="grey-text text-darken-3">
                        Add User
                    </h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="position">Position</label>
                        <input type="text" id="position" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="department">Department</label>
                        <input type="text" id="department" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn black lighten-3 z-depth-0">Create User</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps) (CreateUser)
