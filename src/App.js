import React from 'react';
import HomePage from './pages/Homepage'
import {Switch, Route, Redirect} from 'react-router-dom';
import LeagueofLegends from './pages/LeagueofLegends/LeagueofLegends'
import Header from './components/header/header';
import Auth from './pages/auth/auth';
import './App.css'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import Profile from './pages/Profile/Profile'
 import {connect} from 'react-redux'
 import { setCurrentUser} from './redux/user/user.actions';


class App extends React.Component {

  unsubstribeFromAuth = null

componentDidMount(){
  const {setCurrentUser} = this.props
  this.unsubstribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot => {
            setCurrentUser ({
                id: snapShot.id,
                ...snapShot.data()
              })
            });
      }
    else {
      setCurrentUser(userAuth);
    }
 
  })
}

componentWillUnmount() {
  this.unsubstribeFromAuth();
}



  render(){
  return (
    <div>

      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component ={HomePage}/>
        <Route path='/LeagueofLegends' component={LeagueofLegends}/>
        <Route path='/Profile' component={Profile}/>
        <Route exact path='/SignIn' render={()=> this.props.currentUser?(<Redirect to='/'/>) : (<Auth/>)}/>
        </Switch>
       
      </div>
    </div>

  );
}
}
const mapStateToProps = ({user}, state) => ({
  currentUser: user.currentUser
  
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user=> dispatch(setCurrentUser(user)),
  

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
