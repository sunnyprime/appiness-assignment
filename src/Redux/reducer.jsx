import { AUTHORIZE } from "./action"

const intialState = {
  auth:false,
  
}

export const auth = (state=intialState, action={}) =>{
  console.log(state);
  switch(action.type) {
    case AUTHORIZE:
      return {...state,auth:true}
    default:
      return state;
    }
}