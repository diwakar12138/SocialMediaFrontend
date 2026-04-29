import React from 'react'
import { useRef } from 'react'

const ForgetPassword = () => {

    let inputRef = useRef()  

   async function handleSubmit(){
        let obj = {
            email:inputRef.current.value,
        }
        console.log(obj)

        let res = await fetch('https://socialmediag5-zsbh.onrender.com/users/forgetpassword',{
            method:"post",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        let data = await res.json();
        console.log(data)
    }
  return (

    <div className='h-screen flex justify-center items-center'>
        <h1>Forget Password</h1>
        <div className='flex-item-center justify-center gap-3'>
      <input ref={inputRef} className='outline none rounded border p-2 text-black' type="email" placeholder='enter your email' />
      <button onClick={handleSubmit} className='bg-green-950 text-white hover:bg-green-600 px-4'>submit</button>
       </div>
    </div>
  )
}

export default ForgetPassword
