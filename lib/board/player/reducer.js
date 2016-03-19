import types from '../../common/playerControls/types'

const initialState = {
    direction: types.PLAYER_FORWARD,
    topPosition: 0,
    leftPosition: 0,
    attacking: false
}

let handleMovement = (state, direction) => {
    let newTopPosition = state.topPosition
    let newLeftPosition = state.leftPosition

    switch(direction) {
        case types.PLAYER_FORWARD:
            newTopPosition = state.topPosition + 10
            break
        case types.PLAYER_BACKWARD:
            newTopPosition = state.topPosition - 10
            break
        case types.PLAYER_LEFT:
            newLeftPosition = state.leftPosition - 10
            break
        case types.PLAYER_RIGHT:
            newLeftPosition = state.leftPosition + 10
            break
    }

    return {
        ...state,
        direction: direction,
        topPosition: newTopPosition,
        leftPosition: newLeftPosition
    }
}

const reducer = (state = initialState, action) => {
    if (action.type === types.PLAYER_MOVEMENT_ACTION) {
        return handleMovement(state, action.direction)
    }

    if (action.type === types.PLAYER_ATTACK_BEGIN) {
        return { ...state, attacking: true }
    }

    if (action.type === types.PLAYER_ATTACK_END) {
        return { ...state, attacking: false }
    }

    return state
}

export default reducer
