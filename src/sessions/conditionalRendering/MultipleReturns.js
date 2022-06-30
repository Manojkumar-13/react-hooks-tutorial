import React,{useState,useEffect} from 'react';
const url =`https:api.github.com/users/Manojkumar-13`;

const MultipleReturns = () => {
  const [loading,setLoading] = useState(true);
  const [isError,setIsError] =useState(false);
  const [user,setUser] = useState('No User')
  useEffect(()=>{
    fetch(url)
    .then((resp) =>{
      if(resp.status >= 200 && resp.status <300){
        return resp.json();
      }else{
        setLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
        
      }
      
    }
    )
    .then((user) =>{
      const {login} = user;
      setUser(login);
      setLoading(false);
    })
    .catch((err)=>console.log(err));
  },[]);
  if(loading){
    return (
      <>
      <div className='item'>
        <h2>
          Loading......
          </h2>
          </div>
      </>
  );
}
if(isError){
  return (
    <>
    <div className='item'>
      <h2>
        Error Loading The Page 
        </h2>
        </div>
    </>
);
}
return(
  <>
  <div className="item">
    <h2>{user}</h2></div></>
)
}

export default MultipleReturns