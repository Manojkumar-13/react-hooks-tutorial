export const reducer =(state, action)=>{

  switch(action.type){
    case 'ADD PERSON':
      const addedPeople = [...state.people,action.payload];
      return{
      ...state,
      people:addedPeople,
      isModelOpen: true,
      modelContent: 'Item Added',
    };
    case 'NO VALUE':
      return{
        ...state,
        isModelOpen: true,
        modelContent:'Enter a Value'
      }
    case 'CLOSE MODEL':
      return{
        ...state,
        isModelOpen:false,
      }
    case 'DELETE PERSON':
      const findPeople = state.people.find((person) => person.id === action.payload)
      const updatedPeople = state.people.filter((person) =>person.id !== action.payload)
      return{
        ...state,
        people:updatedPeople,
        isModelOpen:true,
        modelContent:`${findPeople.name} removed`
      };
      case 'EDIT PERSON':
        const editPeople = [...state.people,action.payload]
      return{
      ...state,
      people:editPeople,
      isModelOpen: true,
      modelContent: 'Item Edited',
    };
    default:
      throw new Error('No Matching Action Type') 
  }

}