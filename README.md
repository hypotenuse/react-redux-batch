# react-redux-batch
Simplified version of batch-helper (https://react-redux.js.org/api/batch#batch) that's provided by react-redux package.

```js
npm install --save react-redux-batch (make sure you've installed react-redux 7.0.1+)
```

## Usage

```js
import {batch} from 'react-redux-batch'

function myThunk() {
  return (dispatch, getState) => {
  
    // Causes 3 re-renders (1 re-render per dispatch)
    dispatch(increment())
    dispatch(increment())
    dispatch(increment())
    
    // Causes 1 re-render
    batch(dispatch, [increment(), increment(), increment()])
    
    // batch provided by react-redux. Also causes 1 re-render
    // batch(() => { dispatch(increment()); dispatch(increment()); dispatch(increment()) })
  }
}
```
