import React from 'react'
import {connect} from 'react-redux'
import {removeProfile} from '../actions/profiles'
import GetSelector from '../selectors/profiles'

const Profile = (props) => {

    return(
        <div className="ProfileCard">
            <div className="ProfileCardImg">
                <img src={props.Image}/>
            </div>
            <div className="ProfileCardOtherDetails">
                <p>{props.name}</p>
                <button className='MediumButotn' onClick={()=>props.removeThisProfile(props.id)}>Remove</button>
            </div>
            
        </div>
    
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removeThisProfile : id => dispatch(removeProfile(id))
    }
}
export default connect(null,mapDispatchToProps)(Profile)