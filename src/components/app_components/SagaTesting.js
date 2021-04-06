import React from 'react'
import {useDispatch} from 'react-redux'

function SagaTesting() {
    const dispatch=useDispatch()
    dispatch({type:"DATA",payload:{user:"ibrahim",password:"jamil"}})
    dispatch({type:"DATA",payload:{user:"jamil",password:"ahmed"}})
    return (
        <div>
        </div>
    )
}

export default SagaTesting
