import React,{useState,useEffect} from 'react'

const FormErrorExample = () => {
  const [username,setUserName] = useState('');
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
      <button type='submit'>Submit</button>
    </form>
    </>
    
  )
}

export default FormErrorExample