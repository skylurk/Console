export const createUser = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //crete an async call to database
        const firestore = getFirestore();
        firestore.collection('users').add({
            ...user,
            adminName: 'David',
            myId: 5000,
            createdAt: new Date()
        }).then(() =>{
            dispatch({ type: 'CREATE_USER', user })
        }).catch((err) => {
            dispatch({ type: 'CREATE_USER_ERROR', err});
        })
    }
};
