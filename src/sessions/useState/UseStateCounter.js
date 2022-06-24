import React, {useState}from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increaseLater = ()=>{
    setTimeout(()=>{
      setValue((prev) =>prev +1);
    }, 1000)
  }
  return (
    <>
    <section>
      <h2>counter</h2>
      <h1>{value}</h1>
      <button className="btn" type='button' onClick={() => value !==0 ?setValue(value-1): setValue(0)}>Decrease</button>
      <button className="btn" type='button' onClick={() =>setValue(0)}>Reset</button>
      <button className="btn" type='button' onClick={() =>setValue(value+1)}>Increase</button>
    </section>
    <section>
      <h2>Timed counter</h2>
      <h1>{value}</h1>
      <button className="btn" type='button' onClick={increaseLater}>Increase Later</button>
    </section>
    </>
    
  )
}

export default UseStateCounter