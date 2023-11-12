 import {  useState } from "react"
import myContext from './myContext/'

const MyState = (props) => {
     const [mode,setMode]=useState('light')

       const toggleMode=()=>{
    
        if(mode=="light"){
        
            setMode("dark")
            document.body.style= 'rgb(17, 24, 39)';
        
        }else{
        
        
            setMode("light")
            document.body.style= 'white';
        
        }

    }

  return (
  
    <myContext.Provider value={{mode,toggleMode}}>
       {props.children}
    </myContext.Provider>

  )
}

export default MyState