import React, {useState} from 'react';

const UseStateBasics = () => {
  const [user, setUser] = useState(' Manoj kumar');
  const [age,setAge] = useState(24)
  const clickHandler = () =>{
    if (user === 'Manoj kumar' ){
      setUser('Rajesh kumar')
    }
    else{
      setUser('Manoj kumar')
    }
  }
  return (
    <div>
      <h2>{user}</h2>
      <h3>{age}</h3>
      <button type='button' className='btn' onClick={clickHandler}>Update User</button>
      <button className="btn" type='button' onClick={() => setAge(age ===24? 25:24)}>Update Age</button></div>
  );
};

export default UseStateBasics;