import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
   //import bg from "https://raw.githubusercontent.com/abey003/FrontEnd/ed2f0f0dc3b0f9524f0804aef7a6ddadd101d52d/src/images/bg.png"

const Login = () => {
  return (
    <div className ='loginpage' style={{textAlign: "center"}}>
        <br></br>
        <br></br>
        <Typography variant='h4' style={{fontFamily: 'Segoe UI'}}>WELCOME</Typography><br></br>
        <TextField required id="email" label="email" variant="outlined" style={{ outlineColor: 'white' }}/><br></br><br></br>
        <TextField required id="password" label="password" variant="outlined"/><br></br><br></br>
        <Button variant='outlined' color='inherit' style={{margin: "0px 3px 0px 10px", fontSize: "14px", color: "red"}}>Login</Button>
    </div>
  )
}

export default Login