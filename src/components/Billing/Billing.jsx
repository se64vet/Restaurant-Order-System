import React, {useState} from 'react'
import BillingItemList from './BillingItemList/BillingItemList'
import './BillingStyle.css'

const CashPay = ({cashPay, setCashPay, subTotal})=>(
    <>
        <div className="my-3"><span className='fw-bold me-2'>Cus. pay:</span> <input type="number" onChange={(e)=> setCashPay(e.target.value)} /></div>
        <p><span className='fw-bold'>Change:</span>{(cashPay - ((subTotal*0.1) + subTotal).toFixed(2)).toFixed(2)}</p>
    </>
)

const Billing = ({orderData, deleteItem, clearData}) => {
    const [payment, setPayment] = useState('')
    const [cashPay, setCashPay] = useState(0)
    let subTotal = 0;
    orderData.forEach(item => {
        subTotal += parseFloat((item.price * item.qty));
    });
    
    

    return (
        <div className='text-center d-flex flex-column align-items-center justify-content-around billing'>
            <div className="">
            <h4>Restaurant Name</h4>
            <h6>123 Name st.</h6>
            <h6>City, State</h6>
            <p>Invoice# 9999</p>
            </div>

            <BillingItemList orderData = {orderData} deleteItem={deleteItem}/>

            <div className= 'text-start mt-4'>
                <p><span className='fw-bold'>Subtotal:</span> {`$${subTotal.toFixed(2)}`}</p>
                <p><span className='fw-bold'>tax:</span> 10% </p>
                <p><span className='fw-bold'>Grand Total:</span> {`$${((subTotal*0.1) + subTotal).toFixed(2)}`}</p>
                <label htmlFor="payment" className='fw-bold pe-2'>Payment Method</label>
                <select  name="payment" id="payment" onChange={(e)=>setPayment(e.target.value)}>
                    <option value="card" defaultValue >Credit Card</option>
                    <option value="cash">Cash</option>
                </select>

                {payment==='cash'? <CashPay setCashPay={setCashPay} cashPay={cashPay} subTotal={subTotal}/> : ''}
            </div>

            <div className="align-bottom">
                <p className="fw-bold">THANK YOU FOR YOUR VISIT</p>
                <button className="btn btn-warning" onClick={()=>clearData()}>Clear List</button>
            </div>
        </div>
    )
}

export default Billing
