import React,{useState,useEffect} from 'react'

const useEffectsBasics = () => {
  // use effect is a higher order function
  // by default if runs after re-render
  // Hooks cannot be used conditionally
  // use affects is also having second parameter array
  console.log('i am an opponent');
  const [value,setValue] = useState(0);
  useEffect(() => {
    if (value >= 1){
      document.title = `value - ${value}`
    }
  
  },[value])
  return (
    <>
    <div className='item'>
      <h2>{value}</h2>
      <button className='btn' type='button' onClick={() => {setValue(value + 1)}}> Increase</button>

      </div>
    </>
  )
}

export default useEffectsBasics