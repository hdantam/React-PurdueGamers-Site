import React from 'react'
import {connect} from 'react-redux'
import { setCurrentUser} from '../../redux/user/user.actions';
import LeagueInfo from './LeagueInfo'

class Profile extends React.Component{ 

  state={
    displayName: '',
  }

    componentDidMount(){
        const {currentUser} = this.props
        currentUser?
        console.log(currentUser.id):
        console.log('error')
      }
      


 handleChange =(e) => {
console.log('hino')
 }

 handleSubmit =(e) => {
   console.log('submitted!')
 }


    render() {
        const {currentUser} = this.props
        return(
            currentUser?
            <div>
                <div>
                <h1 style={{textAlign: 'center', backgroundColor: 'light-blue'}}><b>Welcome, {currentUser.displayName}</b></h1>
                </div>
                <div>
                Email: {currentUser.email}
                </div>
                <div>
                    id: {currentUser.id}
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
  