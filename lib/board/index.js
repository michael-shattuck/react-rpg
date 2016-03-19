import React from 'react'
import { connect } from 'react-redux'
import styleable from 'react-styleable'
import playerControls from '../common/playerControls'
import Player from './player'
import css from './index.scss'

let Game = (props) => {
    playerControls.initialize(props.dispatch)

    return (
        <div className={props.css.root}>
            <Player />
        </div>
    )
}

export default connect()(styleable(css)(Game))
