import { useState, Fragment } from 'react'
import AddCat from './AddCat'
import EditCat from './EditCat'
import Avalable from './Avalable'
import store from '../store.json'
import hb2 from '../images/hb2.jpeg'


//this has all the functions of catlist 

const Catlist = () => {


	const initialFormState = { id: null, name: ''}

	// Setting state
	const [ cats, setCats ] = useState(store)
	const [ currentCat, setCurrentCat ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addCat = cat => {
		cat.id = cats.length + 1
		setCats([ ...cats, cat ])
	}

	const deleteCat = id => {
		setEditing(false)

		setCats(cats.filter(cat => cat.id !== id))
	}

	const updateCat = (id, updatedCat) => {
		setEditing(false)

		setCats(cats.map(cat => (cat.id === id ? updatedCat : cat)))
	}

	const editRow = cat => {
		setEditing(true)

		setCurrentCat({ id: cat.id, name: cat.name})
	}

  return (
    <div className="container">
        <h1>Avalable Cats:</h1>
    <div className="row">
        
        <div className='col'>
            <h3>View Cats</h3>

            <Avalable cats={cats} editRow={editRow} deleteCat={deleteCat} />
        </div>

        <div className='col'>
            {editing ? (
                <Fragment>
                    <h3>Edit Cat</h3>
                    <EditCat
                        editing={editing}
                        setEditing={setEditing}
                        currentCat={currentCat}
                        updateCat={updateCat}
                    />
                </Fragment>
            ) : (
                <Fragment>
                    <h3>Add Cat</h3>
                    <AddCat addCat={addCat} />
                </Fragment>
            )}
        </div>
            <img src={hb2}/>

    </div>
</div>
  )
}

export default Catlist;
