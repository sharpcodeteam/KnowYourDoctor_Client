import React, { useEffect ,useRef} from 'react'
import {Navigate} from 'react-router-dom'; 
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import { setUser } from '../redux/features/userSlice';
import Cookies from 'js-cookie';
export default function ProtectedRoute({children}){
  const dispatch=useDispatch();
  const {user}=useSelector(state=>state.user)

  const getUser= async()=>{
    try{
      dispatch(showLoading());
      const resp=await axios.post('https://knowyourdoctor-server.onrender.com/user/getUserData',{
        withCredentials: true,
      })
      dispatch(hideLoading());
      console.log(resp)
      if(resp.data.success){
        console.log("HIi fron adkf;alkdsfd;salkfj;alskdjf;aksldjf;akj")
        dispatch(setUser(resp.data.data))

      }
      else{
        <Navigate to='/login'/>
        console.log("kadfkljadsblfjkabs;djfuohpasdfjknabljksdfbp")
        sessionStorage.clear();
        Cookies.remove('login')
      }
    }
    catch(error){
      dispatch(hideLoading());
      sessionStorage.clear();
      Cookies.remove('login');
      console.log(error);
    }
  };
  const initialized=useRef(false);
  useEffect(()=>{
    if(!initialized.current){
      initialized.current=true
      if(user==null){
      
        getUser()
      }
    }
    
  },[]);

  if(sessionStorage.getItem('token')){
    return children;
  }
  else{
    return <Navigate to='/login'/>;
  }
}


