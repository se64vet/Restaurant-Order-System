import React, {useState, useEffect} from 'react'
import MenuItem from './MenuItem/MenuItem'
import './MenuStyles.css'
import data from './../../data.json'
const Menu = ({addItem}) => {
    
    
    return (
        <div className='row menu justify-content-center'>
            {data.map((x, i) =>
                 <div className="menuItem col-3" key={i} >
                      <MenuItem  item={x} addItem={addItem}/>
                 </div>
            )}
            
        </div>
    )
}

export default Menu
