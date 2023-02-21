import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import './MenuItem.css'

const PopUp = ({item, addItem, qty, note, popUp, setPopUp, handleOnChangeNote, handleOnChangeQty, setQty, setNote})=>{
    function createItem (){
        const newItem = {...item}
        newItem.qty = qty;
        newItem.note = note;
        newItem.id = uuidv4();
        addItem(newItem)
        setQty(1)
        setNote("")
        setPopUp(false)
    }
    return(
    <div className='menu-pop-wrapper'>
        <div className='menu-pop-main p-5'>

            <h3 className="pb-4">{item.name}</h3>

            <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Quantity</span>
            <input type="number" className="form-control"  name='qty' defaultValue={1} onChange={handleOnChangeQty}/>
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Note</span>
            <input type="text" className="form-control" maxLength="30"  name='note' value={note} onChange={handleOnChangeNote} />
            </div>

            <div>
                <button className='btn btn-success mx-1' onClick={()=>createItem()}>Add Item</button>
                <button className='btn btn-danger mx-1' onClick={()=> setPopUp(!popUp)}>Close</button>
            </div>

        </div>
    </div>
    )
}

const MenuItem = ({item, addItem}) => {
    const [popUp, setPopUp] =  useState(false)
    const [qty, setQty] = useState(1)
    const [note, setNote] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    const handleOnChangeQty = event=>setQty(event.target.value)
    const handleOnChangeNote = event=> setNote(event.target.value) 
    
    return (
        <>
        {popUp && <PopUp 
        item={item}
        addItem={addItem}
        qty={qty} 
        note={note}
        popUp={popUp} 
        setPopUp={setPopUp} 
        setQty = {setQty}
        setNote={setNote}
        handleOnChangeNote={handleOnChangeNote} 
        handleOnChangeQty={handleOnChangeQty} />}
        <div className='text-center' onClick={()=> setPopUp(!popUp)}>
            <img src={process.env.PUBLIC_URL + '/assets' + item.imgUrl} alt="food" width={100} height={100} style={{objectFit: "cover", borderRadius: "10px"}}/>
            <h6 className='d-block'>{item.name}</h6>
            <p className='d-block'>{`$${item.price.toFixed(2)}`}</p>
        </div>
        </>
        
    )
}

export default MenuItem
