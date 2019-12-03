import {connect} from 'react-redux'
import React from 'react'


class UpdateLeagueCardForm extends React.Component {



render() {
    return(
        
        <div>
            <p>Summoner Name: {this.props.leagueInfo.summonerName}</p>
            <p>Rank: {this.props.leagueInfo.rank}</p>

    
        </div>
    )
}

}



const mapStateToProps = (state) => ({
    leagueInfo: state.leagueInfo.league,
  })


export default connect(mapStateToProps)(UpdateLeagueCardForm)