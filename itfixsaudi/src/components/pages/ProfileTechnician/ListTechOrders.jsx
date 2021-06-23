import React , { useState, useEffect }from 'react'
import axios from 'axios'
import RequstOrder from './RequstOrder'

export default function ListTechOrders({user}) {

    const [allOrder, setAllOrders] = useState([])
    const [flag, setFlag] = useState(false)

    useEffect(() =>{
        const user1 = user._id&&user._id
        
        axios.get(`/api/v1/order/tech/allOrders/${user._id}`)
        .then(data =>{
            setAllOrders(data.data.allOrders)
            console.log(data.data)
        }).catch(error => {
            console.log(error)
        })
    
    },[user,flag])

    return (
    <>
        <div>      
       { allOrder.map(ele=><RequstOrder order={ele} setFlag={setFlag}
       />)}
        </div> 
        </>
    )
        
}
