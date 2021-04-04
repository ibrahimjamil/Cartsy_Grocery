import data from '../Products'
import {produce} from "immer"

const initialState=data

const datareducer = (state=initialState,action)=>{
  switch(action.type){
    case "Fetched":
      return state
    case "FetchedAllAgain":
      return initialState
    case "Get_Product_By_Category":
        let globalState=initialState
        return produce(globalState,newState=>{
          return newState.filter(product=>product.categoriesId===action.payload.CategoryID)
        })
    case "Get_Product_By_Category_and_subCategory":
      let globalState1=initialState
      return produce(globalState1,newState=>{
        return newState.filter(product=>{
          return (product.categoriesId===action.payload.CategoryID && product.subCategoriesid===action.payload.SubCategoryID)
        })
      })
    default:
      return state
  }
}


export default datareducer