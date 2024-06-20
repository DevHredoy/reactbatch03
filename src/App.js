
import React, { Component} from 'react'
import { Button } from 'antd'

class App extends Component {



constructor(){
super();
this.number=10;

}

 increment(){

this.number=this.number+1;

 }
 decrement(){
this.number=this.number-1;

 }




render(){


return(


<div>

<Button onClick={this.decrement}>
  -
</Button>
{this.number}
<Button onClick={this.increment}>+</Button>

</div>




)

}





}

export default App