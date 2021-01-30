
import {batch as batch_} from 'react-redux'

export const batch = (dispatch, actions) => batch_(() => actions.forEach(action => dispatch(action)))