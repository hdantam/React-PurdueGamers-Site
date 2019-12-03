import {firestore} from '../../firebase/firebase.utils'
export const createLeagueDoc = (league) => {
    return (dispatch, getState) => {
        firestore.collection('League of Legends').doc(league.id).set({
            ...league,
        }).then(() => {
            dispatch({
                type: 'CREATE_LEAGUE_DOC',
                league
            })
        })

    
    }
}
export const setLeagueInfo = (league) => ({
    type: 'SET_LEAGUE_INFO',
    payload: league, 
});