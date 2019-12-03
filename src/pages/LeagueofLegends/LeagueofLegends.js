import React from 'react';
import {firestore} from '../../firebase/firebase.utils';
import './LeagueofLegends.scss'
import Card from './Card';
import {connect} from 'react-redux'


class LeagueofLegends extends React.Component {
    constructor(){
        super();

        this.state= {
            collections: null,
            summonerName: '',
        
        }
    }
    async componentDidMount(){
        firestore.collection('League of Legends').get()
        .then(snapShot=> {
            const leagueData = []
            snapShot.forEach( doc => {
                const data = doc.data()
                leagueData.push(data);
            })
            this.setState({collections: leagueData})
            console.log(snapShot)
        }).catch(error => console.log(error))
        
    }

  
        handleChange = event => {
            const {name, value} = event.target;
            this.setState({[name]:value})
        }

    


    render(){
    
        const {currentUser} = this.props
        console.log(this.props)
        return(
        

        <div className='league-page'>

            
            <h2 className="w3-panel" style={{textAlign: 'center' ,width: '100%'}}><img style={{width:'80px',height:'50px'}} src="https://i.pinimg.com/originals/30/0e/58/300e58c8416a68dcfcf1761501348243.jpg"/><b>League of Legends</b></h2>
            <div>


                <h2>Add your own Information</h2>
                <p>Display Name: {currentUser && currentUser.displayName}</p>
                <p>Signed in as: {currentUser && currentUser.email}</p>
                <p>ID: {currentUser && currentUser.id}</p>
                <form>
                <p>Summoner Name: <input label="bob"/></p>
                <button type='submit'>search</button>
                </form>

            </div>
            {
                this.state.collections && this.state.collections.map(lol => {
                    return(
                        <Card className='Card' displayName={lol.displayName} summonerName={lol.summonerName} rank={lol.rank}/>
                      
                    )
                })
            }

        
            </div>
        
        
        
        )
    }

}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})



export default connect(mapStateToProps)(LeagueofLegends);

