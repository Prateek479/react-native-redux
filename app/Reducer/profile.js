export default function todos(state = [], action) {
    switch (action.type) {
      case 'FETCH_PROFILE':
        return state.concat([action.text])
      default:
        return state
    }
  }