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
        {
          img:action.payload.img,
          price:action.payload.price,
          description:action.payload.description
        },
        ...state
      ]
      default:
        return state
  }
}


export default cartreducer