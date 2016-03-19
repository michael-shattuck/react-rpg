import { handleKeyboardInput } from './actions'

const acceptedCodes = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Space'
]

export default {
    initialize: (dispatch) => {
        document.onkeydown = input => dispatch(() => {
            if (acceptedCodes.includes(input.code)) {
                input.preventDefault
                handleKeyboardInput(input.code, dispatch)
            }
        })
    }
}
