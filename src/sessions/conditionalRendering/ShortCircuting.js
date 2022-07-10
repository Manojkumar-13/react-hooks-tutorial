import React,{useState,useEffect} from 'react'
// for short circuting we use and and or operator
// ternary operator
const ShortCircuting = () => {
  const [text,setText] = useState('')
  return (
    <>
    <div className="item">
      <h2>Short Circuting</h2>
      <h3>{text || 'Manojkumar'}</h3>
    </div>
    </>
  )
}

export default ShortCircuting;