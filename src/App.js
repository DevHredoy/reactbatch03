
import React, { useState } from 'react'
import { Button } from 'antd'

const App = () => {
 
 let [num,setNumber]=useState(10);

  

  return (
    <div>sokal a call dio,shuye porbo!!!
<div>

  <Button onClick={()=>{
    
    setNumber(--num);
    console.log("clicked in minus button:",num)}}>
    -
  </Button>
    {num}
    <Button onClick={()=>{setNumber(++num);
    console.log("clicked in minus button:",num)}}>+</Button>
</div>

    </div>
  )
}

export default App