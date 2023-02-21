import React, {useState, useEffect} from 'react';
import './App.css';
import Billing from './components/Billing/Billing';
import Menu from './components/Menu/Menu';

function App() {
  const [data, setData] = useState([])
  
    function addItem(item){
    setData(prevData => prevData.concat(item))
    console.log(data)
  }

  function deleteItem(id){
    setData(data=> data.filter(item => item.id !== id))
  }

  

  useEffect(() => {
    //  console.log(data[0].name)
},[data]);

  return (
    <div className="container pos">
      <div className="row text-center banner mb-3" style={{backgroundImage: `url(${process.env.PUBLIC_URL + './assets/4.jpg'})`}}>
          <h3>BLUES LOUNGE</h3>
      </div>

      <div className= 'row main'>
        <div className= 'col-7 menu-wrapper justify-content-center'>
          <Menu addItem={addItem} />
        </div>
        <div className= 'col-5 billing-wrapper'>
          <Billing orderData = {data} deleteItem={deleteItem} clearData={()=>setData([])}/>
        </div>
      </div>
    </div>
  );
}

export default App;
