import React , {useState} from 'react'
import Context from "./Context";

const State = (props) => {

  const [typedIn , setTypedIn] = useState('password')
  
  const [studyDetails , setStudyDetails] = useState({
    collage : '',
    year : '',
    branch : '',
  });

  return (
    <Context.Provider value={{typedIn , setTypedIn , studyDetails , setStudyDetails}}>
        {props.children}
    </Context.Provider>
  )
}

export default State