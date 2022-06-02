import React, { useState } from 'react'

/*This is the form to add a cat to catlist*/

const AddCat = (props) => {
  const initialFormState = { id: null, name: ''}
  const [cat, setCat] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setCat({ ...cat, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!cat.name) return

        props.addCat(cat)
        setCat(initialFormState)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={cat.name}
        onChange={handleInputChange}
      />
      <button>Add New Cat</button>
    </form>
  )
}

export default AddCat