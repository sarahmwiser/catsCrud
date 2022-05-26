import React, {useState} from "react";
import { catsApi } from "./CatsApi";



export const AddCat = ({submitHandler})=>{
  const [name, setName] = useState('');
  const isSleeping = false;
  
  /*const submitHandler =(e) => {  /* collects form infomation
    e.preventDefault();
      addCat(name.id, e.target.name.value, isSleeping);
      e.target.reset()*/

  return (

    <>
      <form onSubmit={submitHandler}>
        <input
              name="name"
              placeholder="New Cat"
              onChange={(e)=> setName(e.target.value)} /*calls function {}*/
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}