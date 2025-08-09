import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Containers/Header';
import ProductListing from './Containers/ProductListing'
import ProductDetails from './Containers/ProductDetails'


import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Router>
                  <Header/>

                  <Routes>               
                    <Route path="/" element={<ProductListing/>} />
                    <Route path='/product/:productId' element={<ProductDetails/>} />
                    <Route> 404 Not Found</Route>
                  </Routes>
        </Router>


      </div>
    </>
  )
}

export default App
