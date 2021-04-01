import data from '../InitialData'
const initialState=data

const datareducer = (state=initialState,action)=>{
  switch(action.type){
    case "Fetched":
      return [
          ...state
        ]
      default:
        return state
  }
}


export default datareducer