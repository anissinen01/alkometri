import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm.js';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const App=()=> {
const [result,setResult] = useState();
const handleSubmit = ({ gender, bottles, weight, time }) => {
let litres = Number(bottles)*0.33;
let grams = Number(litres)*8*4.5;
let burning = Number(weight)/10;
grams= Number (grams)-(burning*Number(time));
let resultMale = Number (grams)/(Number(weight)*0.7);
let resultFemale = Number (grams)/(Number(weight)*0.6);
if(gender=="male")
setResult(resultMale);
else 
setResult(resultFemale);


}




  return (<div>
  <MyForm onSubmit={handleSubmit}></MyForm>
  <br></br>
  <div>
    {
      result
    }
  </div>
  </div>

  );
  
}

export default App;
