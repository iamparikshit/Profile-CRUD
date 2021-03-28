const profileDefault = []

export default (state=profileDefault, action)=>{
    switch(action.type)
    {

        case 'ADD_PROFILE':
            return[
                ...state,
                action.profile
            ]
        case 'GET_PROFILES' :
            return state;  
        case 'REMOVE_PROFILE' :
            console.log(state,'did it camse',action)
            return state.filter((profile)=>profile.id !== action.id)      
        default :
            return state;    
    }
}