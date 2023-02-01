import React from 'react'
import Forminput from './Forminput'
import Button from './Button'



const App = () => {

    return ( <div className='landingPage'>
        <h1 > Crop Recommendation </h1> 
        <form>
            <Forminput name="nitrogen" placeholder="value"/>
            <Forminput name="PH value" placeholder='value'/>
            <Forminput name="Temperature" placeholder='Celsius'/>
            <Forminput name="Humidity " placeholder='in %'/>
            <Forminput name="Rainfall" placeholder='mm'/>
             <Button name ='Submit'/>
        </form>
        </div>
    )
}

export default App