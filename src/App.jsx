import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import './Header.css'
import './index.css'
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import  { auth }  from './firebase'
function App() {

  const[{user},dispatch] = useStateValue()

  useEffect(() =>{
  const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {

        dispatch({
          type: "SET_USER",
          user:authUser,
        })
      }

      else{
         dispatch({
          type: "SET_USER",
          user:null,
         })
      }
    })

    return () =>{
      unsubcribe();
    }
  },[])

  return (
    <BrowserRouter>
     
     <Routes>
        <Route path="/" element={<><Header/> <Home/></>}>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/checkout" element={<><Header/> <Checkout/></>}></Route>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
