const filterDeafult = {
    text :''
}

export default (state=filterDeafult, action) => {
    switch(action.type)
    {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text : action.text
            }
       default :
        return state;     
    }
}