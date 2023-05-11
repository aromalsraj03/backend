import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography } from '@mui/material';

const Signup = () => {
  const {register,handleSubmit}=useForm();
  var [result,setResult]=useState({});
  const testClick=(val)=>{
    axios.post('http://localhost:15000/acc/Signup',val).then((response)=>{
        console.log(response.data);
        alert("registration completed");
        setResult(result=response.data);
    })
  }
  return (
    <div style={{textAlign: "center"}}>
        <br></br>
        <br></br>
        <Typography variant='h4' style={{fontFamily: 'Segoe UI'}}>SIGN UP</Typography><br></br>
        <TextField required id="Name" {...register('Name')}label="Name" variant="outlined"/><br></br><br></br>
        <TextField required id="Email"{...register('Email')} label="Email" variant="outlined" style={{ outlineColor: 'white' }}/><br></br><br></br>
        <TextField required id="Password"{...register('Password')} label="Password" variant="outlined"/><br></br><br></br>
        <TextField required id="Age" {...register('Age')}label="Age" variant="outlined"/><br></br><br></br>
        <Button  onClick={handleSubmit (testClick)} variant='outlined' color='inherit' style={{margin: "0px 3px 0px 10px", fontSize: "14px", color: "red"}}>Register</Button>


        
        
    </div>
  )
}

export default Signup