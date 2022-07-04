import React, { Component, useState } from 'react'

export function Form1(){
 
        
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    
     const submitform = (e) =>{
        e.preventDefault();
        if(username.toLowerCase()=="Tenzin" && password.toLowerCase()=="Ngakpal"){
            alert('Valid Username and Password');
        }
        else{
            alert('Invalid Username or password');
        }
   }
    
   
  
        return (
            <div>
                <form onSubmit={submitform}>
                    <label htmlFor="username">Enter User Name</label>
                   <input type="text" id="username" value={username} onChange={(e)=>setusername(e.target.value)} />
                   <label htmlFor="password">Password</label>
                   <input type="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
                   <input type="submit" value="Save" />
                </form>
            </div>
        )
    
}

export default Form1