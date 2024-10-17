import React,{useState,useEffect} from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./Appwrite/auth"
import {login,logout} from "./Store/AuthSlice"
import { Footer, Header } from './components'
import service from './Appwrite/Config'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  },[])
  return !loading ? (
    <div className='min-h-sc flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
 