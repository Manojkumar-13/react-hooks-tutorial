import React,{useEffect} from 'react'

const Modal = ({modelContent,closeModel}) => {
useEffect(()=>{
  const modelOut = setTimeout(()=>{
    closeModel();
  },1000)
  return()=> clearTimeout(modelOut)
})
  return (
    <>
    <h2>{modelContent}</h2>
    </>
    
  )
}

export default Modal