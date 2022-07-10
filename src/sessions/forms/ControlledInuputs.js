import React, {useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

const ControlledInuputs = () => {
  const [username,setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [people,setPeople] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault();
    if(username && email)
    {
      const person = {id:uuidv4(), username, email}
      // if key and value are same name it is oj to skip eg username:username can be written as username
      setPeople((people)=>{
        return [...people,person]
      })
      setUserName('');
      setEmail('')
    }else{
      console.log('inputs cannot be empty')
    }
  }
  return (
    <>
    <form className='form' onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="'user-name">Username:</label>
        <input type="text" id='username' value={username} onChange = {(e) =>setUserName(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="text" id='email' value={email} onChange = {(e) =>setEmail(e.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
    {people.map((person)=>{
      const {id,username,email} = person
      return(
        <div className="item" key={id}>
          <h4>{username}</h4>
          <p>{email}</p>
        </div>
      )
    })}
    </>
  )
}

export default ControlledInuputs
// how to collect multiple inputs
// useRef - uncontrolled inputs
// useReducer - Redux