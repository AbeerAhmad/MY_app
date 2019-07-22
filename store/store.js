import {createStore,combineReducers} from 'redux';
import reducer_searches from './reducers/reducer_searches'
import reducer_all_items from './reducers/reducer_all_items'

const allReducers=combineReducers(
    {
        friends:reducer_searches,
        items:reducer_all_items
    })
let store= createStore(allReducers);

export default store