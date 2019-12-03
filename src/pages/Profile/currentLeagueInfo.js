import {createLeagueDoc, setLeagueInfo} from '../../redux/league/league.actions'
import {connect} from 'react-redux'
import React from 'react'
import {firestore} from '../../firebase/firebase.utils'



class CurrentLeagueInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.currentUser.id,
            leagueData: this.props.leagueCollection,
            summonerName: '',
            rank: '',
    
            
        }
    
    }

    async componentDidMount() {
        
        const filteredLeague = this.state.leagueData.filter(lol => (
            lol.id === this.state.id
        )
            )
            filteredLeague.map(lol => (
                this.setState({summonerName: lol.summonerName}),
                this.setState({rank: lol.rank})
            ))
            
    }

 
render() {

   
    
    return(
        
              <div> 
                  
        <h4 style={{textAlign: 'center'}}>Current League of Legends Information</h4> 
     
           <h6>Summoner name: {this.state.summonerName}</h6>
           <h6>Rank: {this.state.rank}</h6>
        </div>
     
    )
}

}


export default CurrentLeagueInfo