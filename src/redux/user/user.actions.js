import {UserActionTypes} from './user.types'
import {firestore} from '../../firebase/firebase.utils'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const updateCurrentUser = (user) => {
    return (dispatch, getState) => {
        firestore.collection('users').doc(user.id).set({
            ...user,
        }).then(() => {
            dispatch({
                type: UserActionTypes.UPDATE_CURRENT_USER,
                payload: user
            })
        })
        
    
    }
}