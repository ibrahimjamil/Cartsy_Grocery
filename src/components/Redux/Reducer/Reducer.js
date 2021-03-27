
const initialState=[
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'$3.45',
    description:'soft and smooth',
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'$3.45',
    description:'soft and smooth',
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'$3.45',
    description:'soft and smooth',
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'$3.45',
    description:'soft and smooth',
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'$3.45',
    description:'soft and smooth',
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'$3.45',
    description:'soft and smooth',
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'$3.45',
    description:'soft and smooth',
    loading:false
  },
  {
    img:'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210135/canned-food1-3.jpg',
    price:'$3.45',
    description:'soft and smooth',
    loading:false
  }
  
]

const reducer = (state=initialState,action)=>{
  switch(action.type){
    case "Fetched":
      return [
          ...state
        ]
      default:
        return state
  }
}


export default reducer