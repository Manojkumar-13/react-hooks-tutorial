import React, {useState} from 'react'

const UseStateObjects = () => {
  const [person, setPerson] = useState(
    {
      name:'Manojkumar',
      age: 25,
      city : 'Kancheepuram',
      profession: 'Front end developer',
  
    }
  );

  const updateUser = function(){
    let updatedPerson = {...person, age:70};
    setPerson(updatedPerson);
  };
  return (
    <>
    <div className="item">
    <h2>{person.name}</h2>
    <h2>{person.age}</h2>
    <h2>{person.city}</h2>
    <h2>{person.profession}</h2>
    </div>
    <button className="btn" onClick={updateUser}>Update User</button>
    </>
    
  )
}

export default UseStateObjects