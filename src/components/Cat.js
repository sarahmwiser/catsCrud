import React from "react";


export const Cat = (props) => {
  const {cat, isSleeping, updatedCat} = props;

  const deleteCat = (id) => {
    const updatedCat = `http://localhost:3000/delete/${id}`;
    updatedCat(updatedCat);
}



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
           <button onClick={deleteCat.id}>Adopt!</button>
        </span>
       
   </li>
  </>
)

}
