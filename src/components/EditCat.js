import React, { useState, useEffect } from 'react'


//this is the form to allow editing a cat on the catlist

const EditCat = props => {
    const [ cat, setCat ] = useState(props.currentCat)
  
    useEffect(
      () => {
        setCat(props.currentCat)
      },
      [ props ]
    )
  
    const handleInputChange = event => {
      const { name, value } = event.target
  
      setCat({ ...cat, [name]: value })
    }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateCat(cat.id, cat)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={cat.name}
        onChange={handleInputChange}
      />
      
      <button>Update Cat</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditCat