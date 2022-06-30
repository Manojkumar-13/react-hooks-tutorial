import React, {useState,useEffect} from 'react'

const ControlledInuputs = () => {
  const [username,setUserName] = useState('');
  const [email,setEmail] = useState('')
  const submitHandler = (e) =>{
    e.preventDefault();
  }
  return (
    <>
    <form className='form'>
      <div className="form-control">
        <label htmlFor="'user-name">Username:</label>
        <input type="text" id='username' value={username} onChange = {() =>setUserName('Manojkumar')} />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="text" id='email' value={email} onChange = {(e) =>setEmail(e.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
    </>
  )
  }

export default ControlledInuputs