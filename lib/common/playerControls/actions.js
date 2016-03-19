import types from './types'

const movementCodes = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight'
]

const attackCodes = [
    "Space"
]

let handleMovement = (code, dispatch) => {
    let direction

    switch(code) {
        case "ArrowDown":
            direction = types.PLAYER_FORWARD
            break
        case "ArrowUp":
            direction = types.PLAYER_BACKWARD
            break
        case "ArrowLeft":
            direction = types.PLAYER_LEFT
            break
        case "ArrowRight":
            direction = types.PLAYER_RIGHT
            break
        default:
            direction = types.PLAYER_FORWARD
            break
    }

    dispatch({ type: types.PLAYER_MOVEMENT_ACTION, direction })
}

let handleAttack = (code, dispatch) => {
    dispatch({ type: types.PLAYER_ATTACK_BEGIN })

    setTimeout(() => {
        dispatch({ type: types.PLAYER_ATTACK_END })
    }, 200)
}

export let handleKeyboardInput = (code, dispatch) => {
    if (movementCodes.includes(code)) {
        handleMovement(code, dispatch)
    }

    if (attackCodes.includes(code)) {
        handleAttack(code, dispatch)
    }
}
