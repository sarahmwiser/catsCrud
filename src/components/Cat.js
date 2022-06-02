import React from "react";


export const Cat = (props) => {
  const {cat, isSleeping, updatedCat} = props;

  /*const deleteCat = (id) => {
    if (updatedCat = `'https://6260d106f429c20deb95d050.mockapi.io/:catNames/:id'`);
    console.log( deleteCat(id));
    <button onClick={deleteCat.id}>Adopt!</button>
    */




const sleeping = (id) => {
  if (isSleeping = false){
    return sleeping('Awake');
} else sleeping('Asleep')
}

 return (
    <>
    <li>
       
        <span>
           <h3>{cat.name}</h3>
           <p>Is the cat sleeping?
          <input
              type="checkbox"
              checked={cat.isSleeping} 
              onChange={() => sleeping(cat.id)}
            /></p>
           
        </span>
       
   </li>
  </>
)

 }
