import React from 'react'
import {connect} from 'react-redux'
import { setCurrentUser} from '../../redux/user/user.actions';
import LeagueInfo from './LeagueInfo'
import CurrentLeagueInfo from './currentLeagueInfo'
import {firestore} from '../../firebase/firebase.utils'

class Profile extends React.Component{ 

  state={
    leagueCollection: []
    
  }

  async componentDidMount(){
    firestore.collection('League of Legends').get()
    .then(snapShot=> {
        const leagueData = []
        snapShot.forEach( doc => {
            const data = doc.data()
            leagueData.push(data);
        })
        this.setState({leagueCollection: leagueData})
    
    }).catch(error => console.log(error))
    
}
      


 handleChange =(e) => {
console.log('hino')
 }

 handleSubmit =(e) => {
   console.log('submitted!')
 }

 getFilteredName =() => {
   console.log('hi')
 }


    render() {
        const {currentUser} = this.props
        const {leagueCollection} = this.state

        return(
            currentUser?

            <div>
                <div>
                <h1 style={{textAlign: 'center', backgroundColor: 'light-blue'}}><b>Welcome, {currentUser.displayName}</b></h1>
                </div>
                <div style={{textAlign:'center'}}>
                Email: {currentUser.email}
                </div>
                <div>
                
                </div>
                <div>
                  <CurrentLeagueInfo currentUser={currentUser} leagueCollection={leagueCollection}/>
                </div>
                <div>
   
                    <LeagueInfo currentUser={currentUser}/>
                </div>


            </div>
            :<div>Sign in again to view your profile</div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    
  })
  

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user=> dispatch(setCurrentUser(user))
  })


  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
  