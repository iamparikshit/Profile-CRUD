import React from 'react'
import GetSelector from '../selectors/profiles'
import {connect} from 'react-redux'
import {addProfile, removeProfile} from '../actions/profiles'
import ProfileList from '../components/ProfileList'
import {setTextFilter} from '../actions/filters'

class Home extends React.Component{
    
    componentDidMount(){
        try{
            fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json').then((resp)=>{
                resp.json()
                .then((result)=>{
                    result.forEach(profile => {
                        if (this.props.profiles.filter(item=> item.id === profile.id).length == 0)
                            this.props.addProfiles(profile)
                    });     
                })
            })
        }
        catch(e){
            alert('Sorry.Error occured')
        }
    }
    handleOnchnage = (e) =>{
        e.preventDefault();
        const searchtext = e.target.value
        this.props.getFilters(searchtext)
    } 
    render(){
        return(
            <div>
                <div className='SearchBar'>
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <input className='inputSearchBar' onChange={this.handleOnchnage} placeholder="Enter the text here..."></input>
                    </form>
                </div> 
                <ProfileList/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        profiles : GetSelector(state.profiles, state.filters)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addProfiles : (profile) => dispatch(addProfile({...profile})),
        getFilters : (text) => dispatch(setTextFilter(text)),
        removeThisProfile : (id) => dispatch(removeProfile(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)