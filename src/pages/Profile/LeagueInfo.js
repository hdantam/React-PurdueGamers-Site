import {createLeagueDoc, setLeagueInfo} from '../../redux/league/league.actions'
import {connect} from 'react-redux'
import React from 'react'
import UpdateLeagueCardForm from './UpdateLeagueCardForm'


class LeagueInfo extends React.Component {
    state = {
        displayName: this.props.currentUser.displayName,
        id: this.props.currentUser.id,
        summonerName: '',
        rank: '',
        
        
    }
    handleChange = (e) => {
        this.setState({
        [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createLeagueDoc(this.state)
        this.props.setLeagueInfo(this.state)
        
    }

render() {
    
    return(
        
              <div> 
        <h4>Your current league of legends information:</h4> 
            <p>Summoner Name: {this.props.leagueInfo && this.props.leagueInfo.summonerName}</p>
            <p>Rank: {this.props.leagueInfo && this.props.leagueInfo.rank}</p>
            
            

            <form onSubmit={this.handleSubmit} className="w3-container">
                <label>Summoner Name</label>
                <input className="w3-input" type="text" id='summonerName' onChange={this.handleChange}/>
                <label>Rank</label>
                <input className="w3-input" id='rank' type="text" onChange={this.handleChange}/>
                <button class="w3-btn">Update League Info</button>

        </form>
        </div>
    )
}

}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    leagueInfo: state.league.league,
    
  })

const mapDispatchToProps = (dispatch) => {
    return{
        createLeagueDoc: (league) => dispatch(createLeagueDoc(league)),
        setLeagueInfo: (league) => dispatch(setLeagueInfo(league)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeagueInfo)