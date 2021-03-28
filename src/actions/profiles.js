import {v4 as uuid} from 'uuid'

//action generators
export const addProfile = ({name='', Image='', id=uuid(), createdAt =0} = {}) => ({
    type : 'ADD_PROFILE',
    profile : {
        id,
        name,
        Image,
        createdAt
    }
})
export const removeProfile = (id='')=>({
    type : 'REMOVE_PROFILE',
    id
})

export const editExpense = (id, updates) =>({
    type : 'EDIT_PROFILE',
    id, 
    updates
})