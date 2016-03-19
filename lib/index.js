import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import GameBoard from './board'

let store = applyMiddleware(thunk)(createStore)(reducer)

render(
    <Provider store={store}>
        <GameBoard />
    </Provider>,
    document.getElementById('mount')
)
