import React, {useState} from 'react'

const List = ({dogs}) => {
  const [pups,setPups] = useState(dogs);
  const deleteDog = (id) =>{
    let updatedDogs = pups.filter((dog) => dog.id!==id);
    setPups(updatedDogs);
    console.log(updatedDogs);
  }
  return (
    <>
    <h3>{pups.length} Birthdays Today</h3>
    {pups.map((dog) =>{
      const{id,name,age,image} = dog;
      return(
        <article key ={id}>
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
            <button type='button' className='btn-delete' onClick={()=> deleteDog(id)}>X</button>
        </article>
      )
    })};
    <button className="btn" type='button' onClick={()=> setPups([])}> Clear all</button>
    </>
  )
}

export default List