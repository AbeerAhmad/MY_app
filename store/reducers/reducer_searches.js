let INIT_state={
    abeer: '45' 
}

const Reducer_searches = (state=INIT_state, action) => {
    switch (action.type) {
      case "ADD_SEARCHES":
        return action.payload 
      default:
        return state
  
    }
  }
  
  export default Reducer_searches;