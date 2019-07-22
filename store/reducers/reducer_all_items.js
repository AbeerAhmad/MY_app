let INIT_state=[
   
]

const Reducer_searches = (state=INIT_state, action) => {
    switch (action.type) {
      case "ALL_ITEMS":
        return action.payload 
      default:
        return state
  
    }
  }
  
  export default Reducer_searches;