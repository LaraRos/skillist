import { createStore } from 'redux'
import {rootReducer} from './reducers/rootReducer'
import {loadingReducer} from './reducers/loadingReducer'

export const store = createStore(rootReducer)