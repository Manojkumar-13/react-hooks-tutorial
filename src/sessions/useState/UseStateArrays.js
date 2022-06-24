import React, {useState} from 'react';
import {data} from '../../data';

const UseStateArrays = () => {
  const[users,setUsers] = useState(data);
  const deleteUser = (id) =>{
    let newUser = users.filter((user) => user.id !==id);
    setUsers(newUser);
  };
  return (
    <>{
      users.map((user) =>(
        <div className="item" key={user.id}>
          <h2>{user.name}
          </h2>
          <button type='button' className='btn-delete' onClick={() =>deleteUser(user.id)}>X</button>
        </div>
      ) 
      )
    }
    <button type='button' className='btn' onClick={()=>setUsers([])}>Clear Users</button>
    </>
  )
}

export default UseStateArrays