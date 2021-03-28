import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import GetSelector from '../selectors/profiles'

const ProfileList = (props) => {
    return(
        <div>
            <div className="ProfileWidgetheader">
                {props.profiles && props.profiles.length > 0 ? <h2>Profile List</h2> : <h2>Sorry,No Profiles Found!!</h2>}
            </div>
            <div className="ProfileWidget">
                {
                    (props.profiles && props.profiles.length > 0) &&
                    props.profiles.map((profile)=>{
                        return <Profile key={profile.id} {...profile}/>
                    })
                }
            </div>
    
        </div>
    
    )
}

const mapStateToProps = (state) =>{
    return{
        profiles : GetSelector(state.profiles, state.filters)
    }
}
export default connect(mapStateToProps)(ProfileList)
