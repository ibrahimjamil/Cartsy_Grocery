
const initialState={
  catId:0,
  subId:0,
}

const searchReducer=(state=initialState,action)=>{
  switch(action.type){
    case "SearchAll":
      return initialState
    case "SearchFromCategory":
      return {
        catId:action.payload.Cid,
        subId:0
      }
    case "SearchFromSubCategory":
      return{
        catId:action.payload.Cid,
        subId:action.payload.SubId
      } 
    default:
      return state
  }
}


export default searchReducer