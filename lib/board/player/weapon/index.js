import React from 'react'
import styleable from 'react-styleable'
import types from '../../../common/playerControls/types'
import css from './index.scss'

let Weapon = (props) => {
    let directionClass
    switch (props.direction) {
        case types.PLAYER_FORWARD:
            directionClass = props.css.forward
            break
        case types.PLAYER_BACKWARD:
            directionClass = props.css.backward
            break
        case types.PLAYER_LEFT:
            directionClass = props.css.left
            break
        case types.PLAYER_RIGHT:
            directionClass = props.css.right
            break
    }

    return (
        <div className={`${props.css.weapon} ${directionClass}`}></div>
    )
}

export default styleable(css)(Weapon)
