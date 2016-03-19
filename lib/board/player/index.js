import React from 'react'
import { connect } from 'react-redux'
import styleable from 'react-styleable'
import css from './index.scss'
import types from '../../common/playerControls/types'
import Weapon from './weapon'

class Player extends React.Component {
    render() {
        let directionClass
        switch (this.props.direction) {
            case types.PLAYER_FORWARD:
                directionClass = this.props.css.forward
                break
            case types.PLAYER_BACKWARD:
                directionClass = this.props.css.backward
                break
            case types.PLAYER_LEFT:
                directionClass = this.props.css.left
                break
            case types.PLAYER_RIGHT:
                directionClass = this.props.css.right
                break
            default:
                directionClass = this.props.css.forward
                break
        }

        let playerStyle = {
            marginLeft: this.props.leftPosition,
            marginTop: this.props.topPosition
        }

        let playerClass = `${this.props.css.player} ${directionClass}`
        return (
            <div className={this.props.css.root} style={playerStyle}>
                <div className={playerClass} key="player"></div>
                { this.props.attacking ? <Weapon direction={this.props.direction} key="weapon" /> : null }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state.player }
}

export default connect(mapStateToProps)(styleable(css)(Player))
