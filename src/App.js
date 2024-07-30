
import React, { useState } from 'react'
import { Button } from 'antd'

const App = () => {
 
 let [num,setNumber]=useState(10);



const nicks=["mamu","kakke","major"];


const modNicks=nicks.map((name)=>{

console.log("the name is before :",name);
return(name+"san"
)
 
})

console.log("the new array is now :",modNicks)

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