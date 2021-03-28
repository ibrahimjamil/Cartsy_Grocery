const initialState=[
  {
    img:'',
    price:'',
    description:''
  }
]


const cartreducer = (state=initialState,action)=>{
  switch(action.type){
    case "ADD_TO_CART":
      return [
        ...state,
        {
          img:action.payload.img,
          price:action.payload.price,
          description:action.payload.description
        }
      ]
      default:
        return state.splice(0,1)
  }
}


export default cartreducer