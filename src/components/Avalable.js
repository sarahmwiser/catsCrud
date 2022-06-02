
//this is the jsx to set up the layout of the catlist

const Avalable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.cats.length > 0 ? (
      props.cats.map((cat) => (
        <tr key={cat.id}>
          <td>{cat.name}</td>

          <td>
            <button 
            onClick={() => {props.editRow(cat)}}
            className="button muted-button"
            >Edit</button>
            
            <button
              onClick={() => props.deleteCat(cat.id)}
              className="button muted-button"
              >Delete</button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No Cats Avalable! </td>
      </tr>
    )}
    </tbody>
  </table>
)

export default Avalable
