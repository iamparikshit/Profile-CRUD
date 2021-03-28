import {createStore, combineReducers} from 'redux'
import profilesReducer from '../reducers/profilesReducer'
import filterReducer from '../reducers/filtersReducer'
//store

export default () =>{
   const store= createStore(
        combineReducers({
            profiles : profilesReducer,
            filters : filterReducer
        })
    )
    return store
}