import React from 'react'
import "./BillingItemList.css"
const BillingItemList = ({orderData, deleteItem}) => {
    
    const List = () =>{
        return(
            orderData.map((item, key)=>
                
                <tr key={key}>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{(item.price * item.qty).toFixed(2)}</td>
                    <td>{item.note}</td>
                    <td><button className='btn btn-outline-danger' onClick={()=>deleteItem(item.id)}><i className="bi bi-trash"></i></button></td>
                </tr>
                
                )
        )
    }
        
    
    return (
       
        <div className='text-center table-wrapper'>
            <table className='table table-striped'>
                <thead>
                <tr className="table-header">
                        <th scope='col'>Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Note</th>
                </tr>
                </thead>

                <tbody>
                    <List />
                </tbody>
            </table>
        </div>
    )
}

export default BillingItemList
