import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';

const Header = ( {currentUser}) => (
    <div className = 'header'>
            <Link className='logo-container' to="/">
                Home
            </Link>
            <div className='options'>

                {
                    currentUser ?
                    <Link className='option' to='/Profile' >Profile</Link>:null
                    
                }

                {
                    currentUser ?
                    <div className = 'option' onClick={() => auth.signOut()}>Sign Out</div>:
                    <Link className='option' to='/SignIn' >Sign In</Link>
                    
                }
            </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);