const INITIAL_STATE = {
    league: null,

}
const leagueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ('CREATE_LEAGUE_DOC') :{
            return state
            break;
        }
        case ('CREATE_LEAGUE_DOC_ERROR') : {
            console.log('create league doc error', action.error)
            break;
        }
        case('SET_LEAGUE_INFO'):{
            return {
                ...state,
                league: action.payload
            }
        }

    
        
        default :
        return state;
    }
}



export default leagueReducer;