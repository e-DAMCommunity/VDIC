import React from 'react'

import { Login , Registration } from './Pages'

import {BrowserRouter , Route , Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App