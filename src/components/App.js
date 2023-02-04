import React, { useState } from 'react'
import "./app.css"

const App = () => {

    const [N, setN] = useState('')
    const [P, setP] = useState('')
    const [K, setK] = useState('')
    const [pH, setpH] = useState('')
    const [rainfall, setrainfall] = useState('')
    const [ph_no, setph_no] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            ph: ph_no,
            N: N,
            P: P,
            K: K,
            pH: pH,
            rainfall: rainfall
        };
        const json = JSON.stringify(data);
        console.log(json);
    }

    // const [fsubmit, setfsubmit] = useState(0)
    // console.log(fsubmit);

    return ( <div className='landingPage'>
        <h1 > Crop Recommendation </h1> 

        {/* <Forminput name="nitrogen" placeholder="value"/>
        <Forminput name="PH value" placeholder='value'/>
        <Forminput name="Temperature" placeholder='Celsius'/>
        <Forminput name="Humidity " placeholder='in %'/>
        <Forminput name="Rainfall" placeholder='mm'/>
        <Button name ='Submit' counter={setfsubmit}/> */}

        <div className='formbox'>
        <form onSubmit={handleSubmit} className='form'>
            <div className='each_line'>
                <label className='form_elements'>Phone number </label>
                <input type = "tel" maxLength="10" minLength="10" value= {ph_no} onChange={e => {setph_no(e.target.value)}} className='form_input' required/>
            </div>
            
            <div className='each_line'>
                <label className='form_elements'>N </label>
                <input type = 'number' value= {N}  maxLength="5" onChange={e => {setN(e.target.value)}} className='form_input' required/>
            </div>
            <div className='each_line'>
                <label  className='form_elements'>P </label>
                <input type = 'number' value= {P} maxLength="5" onChange={e => {setP(e.target.value)}} className='form_input' required/>
            </div>
            <div className='each_line'>
                <label  className='form_elements'>K </label>
                <input type = 'number' value= {K} maxLength="5" onChange={e => {setK(e.target.value)}} className='form_input' required/>
            </div>
            <div className='each_line'>
                <label  className='form_elements'>pH </label>
                <input type = 'number' value= {pH} maxLength="5" onChange={e => {setpH(e.target.value)}} className='form_input' required/>
            </div>
            <div className='each_line'>
                <label  className='form_elements'>rainfall </label>
                <input type = 'number' value= {rainfall} maxLength="5" onChange={e => {setrainfall(e.target.value)}} className='form_input' required />
            </div>
            <div >
            <input type="submit" value="Submit" className='submit_button'/>
            </div>
            
        </form>
        </div>


        </div>
    )
}

export default App