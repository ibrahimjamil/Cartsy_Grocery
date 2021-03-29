
const initialState=[
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'3.45',
    description:'soft and smooth',
    quantity:0,
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09062932/vegetables12-4.jpg',
    price:'7.68',
    description:'Organic white mashroom',
    quantity:0,
    loading:false
  },
  {
    img:' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09062732/vegetables11-4.jpg',
    price:'4.96',
    description:'oragnic pelled',
    quantity:0,
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'3.45',
    description:'soft and smooth',
    quantity:0,
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'3.45',
    description:'soft and smooth',
    quantity:0,
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'3.45',
    description:'soft and smooth',
    quantity:0,
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'3.45',
    description:'soft and smooth',
    quantity:0,
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'3.45',
    description:'soft and smooth',
    quantity:0,
    loading:false
  }
  
]

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