import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
const MyForm=({onSubmit})=>{
    const [gender, setGender] = useState('');
    const [bottles, setBottles] = useState('');
    const [weight, setWeight] = useState('');
    const [time, setTime] = useState ('');

    const handleWeightChanges=(x)=>{
        setWeight(x.target.value);

    };
    const handleBottlesChanges=(x)=>{
        setBottles(x.target.value);

    };
    const handleGenderChanges=(x)=>{
        setGender(x.target.value);

    };
    const handleTimeChanges=(x)=>{
        setTime(x.target.value);
    }
    const handleSubmit=(x)=>{
        x.preventDefault();
        onSubmit({weight,bottles,gender,time});
    }

    return(
<form onSubmit={handleSubmit}>
<label>weight
    <input value={weight} onChange={handleWeightChanges} type="number">
    </input>
    <br></br>
</label>
<label>bottles
    <input value={bottles} onChange={handleBottlesChanges} type="number" step="1">
    </input>
    <br></br>
</label>
<label>time
    <input value={time} onChange={handleTimeChanges} type="number">
    </input>
    <br></br>
</label>
<label>gender
    <input checked={gender==="male"} onChange={handleGenderChanges} id="male" type="radio" name="nimi" value="male">
    </input>
<label for="male">Male</label>
<input checked={gender==="female"} onChange={handleGenderChanges} id="female" type="radio" name="nimi" value="female">
    </input>
<label for="female">Female</label>
<button type='submit'>Calculate</button>
</label>
</form>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default MyForm;