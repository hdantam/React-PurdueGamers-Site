import React from 'react';
import {firestore} from '../../firebase/firebase.utils';
import './Overwatch.scss'
import {connect} from 'react-redux'
import {CardList} from './card-list'


class LeagueofLegends extends React.Component {
    constructor(){
        super();

        this.state= {
            collections: [],
            searchField: '',

        }
    }
    async componentDidMount(){
        firestore.collection('Overwatch').get()
        .then(snapShot=> {
            const overwatchData = []
            snapShot.forEach( doc => {
                const data = doc.data()
                overwatchData.push(data);
            })
            this.setState({collections: overwatchData})
        
        }).catch(error => console.log(error))
        
    }

  
        handleChange = event => {
            const {name, value} = event.target;
            this.setState({[name]:value})
        }

    


    render(){
    
        const { collections, searchField } = this.state;
        const filteredLeague = collections.filter(lol => (
            lol.displayName.toLowerCase().includes(searchField.toLowerCase())
        )
            )
        const {currentUser} = this.props
        return(
        

        <div className='league-page'>
            <h2 className="w3-panel" style={{textAlign: 'center' ,width: '100%'}}><img style={{width:'40px',height:'40px'}} src="https://i.dlpng.com/static/png/232624_preview.png" alt="Overwatch icon"/><b>Overwatch</b></h2>
            <div>
                <h4 style={{textAlign: 'center'}}>
                <input style={{align: 'center'}} onChange={e=> this.setState({searchField: e.target.value})} type='search' placeholder='Search by name' />
                
                </h4>
                <p style={{textAlign: 'center'}}>Signed in as: {currentUser && currentUser.displayName}</p>
            </div>
            
            <CardList collections={filteredLeague}/>

        
            </div>
        
        
        
        )
    }

}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  
})



export default connect(mapStateToProps)(LeagueofLegends);

