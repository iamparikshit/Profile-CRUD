import React from 'react'
import {connect} from 'react-redux'
import GetSelector from '../selectors/profiles'
import {addProfile} from '../actions/profiles'

class AddProfile extends React.Component{
    handleAddProfile = (e) =>{
        e.preventDefault()
            try{
                const Image = e.target.ImageURL.value.trim()
                const name = e.target.User_Name.value
                const profile = {
                    Image,
                    name
                }
                if(profile){
                    this.props.addProfiles(profile)
                }
                e.target.elements.ImageURL.value = ''
                e.target.elements.User_Name.value = ''
                window.alert('Save Successfully')
            }
            catch(e){
                window.alert('Sorry, Error Occured')
            }
    }
    render(){
        return(
            <div className='AddProfile'>
                <div className='AddProfileHeader'>
                    <h2>Add Profile</h2>
                </div>
                <div className='center'>
                    <p> NOTE : Please provide the URL of image and the name of Person. Once saved, you can see it home page.</p>
                    <form onSubmit={this.handleAddProfile}>
                        <p> Image URL : <textarea name='ImageURL' className='TextArea' placeholder="Enter the Avatar URL"/> </p>
                        <p> User Name : <input name='User_Name' className='InputName' placeholder="Enter the name here"/>  </p>
                        <button className='Largebutton'>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps =(state) =>{
    return {
        profiles : GetSelector(state.profiles, state.filters)
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addProfiles : (profile) => dispatch(addProfile({...profile})),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProfile)