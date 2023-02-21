import React from 'react'
import MenuItem from './MenuItem/MenuItem'
import './MenuStyles.css'
import nData from './../../nData.json'
const Menu = ({addItem}) => {
    
    
    return (
        <div className='mt-5 row menu justify-content-center'>
            {nData.map((x, i) =>
                 <div className="menuItem col-3" key={i} >
                      <MenuItem  item={x} addItem={addItem}/>
                 </div>
            )}
            
        </div>
    )
}

export default Menu
