const initialState=[
  {
    img:'',
    price:'',
    description:'',
    quantity:''
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
          description:action.payload.description,
          quantity:1
        }
      ]
    case "increment_quan":
      let copystate=[...state]
      copystate.map((object,index)=>{
        if (index===action.payload){
          object.quantity=object.quantity+1
        }
      })
      return copystate
    case "decrement_quan":
      let copystate2=[...state]
      copystate2.map((object,index)=>{
        if (index===action.payload){
          object.quantity=object.quantity-1
        }
      })
      return copystate2
      default:
        return state
  }
}


export default cartreducer