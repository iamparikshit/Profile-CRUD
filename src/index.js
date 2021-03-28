import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {addProfile} from './actions/profiles'
import {setTextFilter} from './actions/filters'
import selector from './selectors/profiles'

const store = configureStore()
store.getState()
//store.dispatch(addProfile({name: 'water bill',image:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}))
//store.dispatch(addProfile({name : 'electricity bill', image:'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'}))
//store.dispatch(setTextFilter('bill'))
console.log(store.getState())
const state = store.getState()
console.log(selector(state.profiles, state.filters))


const App = () => (
    <Provider store={store}>
        <AppRouter/>
    </Provider>

)

ReactDOM.render(<App/>,document.getElementById('root'));

