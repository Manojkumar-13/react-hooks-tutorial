import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const MultipleInputs = () => {
  const[person,setPerson] = useState({username: '',email:'',age:''})
  const submitHandler = (e)=>{
    const {username,email,age} = person
    e.preventDefault();
    if(username && email && age){
      const newPerson ={...person,id:uuidv4()}
      setPeople([...people,newPerson])
      setPerson({username:'',email:'',age:''})

    }
  }
  const [people,setPeople] =useState([])
  const changeHandler =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person,[name]:value})

  }
  return (
    <>
    <form className='form' onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="'username">Username:</label>
        <input type="text" id='username' 
        name='username'
        value={person.name}
        onChange={changeHandler} />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="text" id='email'
        name='email' 
        value={person.email} 
        onChange={changeHandler} />
      </div>
      <div className="form-control">
        <label htmlFor="age">Age:</label>
        <input type="text" id='age'
        value={person.age}
        name='age'
        onChange={changeHandler}  />
      </div>
      <button type='submit'>Submit</button>
    </form>
    {people.map((person)=>{
      const {id,username,email,age} = person
      return(
        <div className="item" key={id}>
          <h4>{username}</h4>
          <p>{email}</p>
          <p>{age}</p>
        </div>
      )
    })}
    </>
  )
}

export default MultipleInputs