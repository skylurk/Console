const initState = {
    users: [
        {id: '1', title: 'First Last Name', position: 'Captain'},
        {id: '2', title: 'Second Last Name', position: 'Engineer'},
        {id: '3', title: 'Third Last Name', position: 'Operations'},
        {id: '4', title: 'Fourth Last Name', position: 'Operations'},
        {id: '5', title: 'Fifth Last Name', position: 'Operations'}
    ]
}
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            console.log('created user', action.user);
            return state;
        
        case 'CREATE_USER_ERROR':
            console.log('create user error', action.err)
            return state;
        
        default:
            return state
    }
}

export default userReducer