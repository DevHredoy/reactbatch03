//index.js will tell using dom library functions that in the class named
//root will be created html.that html will be created by App.js


// the code below will be in javascript

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
<React.StrictMode>
  <App/>
</React.StrictMode>

)

//IN  root div we shall create something



