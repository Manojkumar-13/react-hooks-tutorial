import React, {useState, useReducer} from 'react'
import Modal from './Modal';
import {reducer} from './reducer';
import { v4 as uuidv4 } from 'uuid';

const Index = () => {
  const [name,setName] = useState('');
  const [isEditing,setIsEditing]= useState(false);
  const [editId,setEditId] = useState(null)
  const modifyPeople=(id,name)=>{
    setName(name)
    setIsEditing(true);
    setEditId(id);
  }
  const defaultState = {
    people: [],
    isModelOpen: false,
    ModelContent:''
  }
  const [state,dispatch] = useReducer(reducer,defaultState)
  const submitHandler= (e)=>{
    e.preventDefault();
    if(name && !isEditing){
      const newItem ={id:uuidv4(),name};
      dispatch({type:'ADD PERSON',payload:newItem})
      setName('') 
    }else if(isEditing){
      const editedPeople = state.people.find((people)=>(editId === people.id)
      )
      const updatedPeople = {...editedPeople,name}
      dispatch({type:'DELETE PERSON',payload:editId})
      dispatch({type:'EDIT PERSON',payload:updatedPeople})
      setIsEditing(false);
      setEditId(null)
      setName('')
    }
    else{
      dispatch({type:'NO VALUE'})
    }
    
  }
  const closeModel = () =>{
    dispatch({type:'CLOSE MODEL'})
  }  
  return (
    <>
    {state.isModelOpen && <Modal modelContent = {state.modelContent} closeModel = {closeModel} />}
    <form className='form' onSubmit={submitHandler}>
      <div className="form-control">
        <input 
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)} />
      </div>
      <button type='submit'>{isEditing?'EDIT':'ADD'}</button>
    </form>
    {state.people.map(person => {
      return(
        <div className="item" key = {person.id}>
          <article>
          <h4>{person.name}</h4>
          <button className='btn-delete' onClick={()=>dispatch({type:'DELETE PERSON',payload:person.id})}>Delete</button>
          <button className='btn-delete' onClick={()=>{modifyPeople(person.id,person.name)}}>Edit</button>
          </article>
      </div>
      )
      
    })}
    </>
  )
}

export default Index