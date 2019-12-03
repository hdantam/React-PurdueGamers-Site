import {createLeagueDoc, setLeagueInfo} from '../../redux/league/league.actions'
import {connect} from 'react-redux'
import React from 'react'
import {firestore} from '../../firebase/firebase.utils'


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


    async componentDidMount(){
        console.log(this.props.currentUser.id)
        const {id} = this.props.currentUser.id
        console.log(id);
    }

    getFireStoreData(e) {
        firestore.collection('League of Legends').doc(e).onSnapshot(function(doc) {
            console.log("Current data: ", doc.data());
        });
    }

render() {
    
    return(
        
              <div> 
                  
        <h4 style={{textAlign: 'center'}}>Update your League of Legends Information</h4> 
          
            
            

            <form onSubmit={this.handleSubmit} className="w3-container">
                <input placeholder='Summoner Name (in game name)' className="w3-input" type="text" id='summonerName' onChange={this.handleChange}/>
                <input placeholder='Rank (ex. Bronze 1)' className="w3-input" id='rank' type="text" onChange={this.handleChange}/>
                <button className="w3-btn" onClick={() => window.location.reload(false)}>Update League Info</button>

        </form>
        </div>
    )
}

}



const mapDispatchToProps = (dispatch) => {
    return{
        createLeagueDoc: (league) => dispatch(createLeagueDoc(league)),
        setLeagueInfo: (league) => dispatch(setLeagueInfo(league)),
    }
}


export default connect(null, mapDispatchToProps)(LeagueInfo)