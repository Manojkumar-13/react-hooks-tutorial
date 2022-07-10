import React,{useEffect,useRef} from 'react'

const UseRef = () => { 
  const refContainer = useRef(null);
  const submitHandler = (e)=>{
    e.preventDefault();
  }
  useEffect(()=>{
    refContainer.current.focus();
  })
  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="username">UserName: </label>
          <input 
          type="text"
          id='username'
          name='username'
          ref={refContainer}
          />
        </div>
        <button type='submit' >Submit</button>
      </form>
    </>
  )
}

export default UseRef