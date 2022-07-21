import React, {useState} from 'react'

function SearchPanel() {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const [users, setUsers] = useState([])
   
  return (
    <form>
      <div>
        <input type='text' value={param.name} onChange={evt => setParam({
          ...param,
          name: evt.target.value
        })}/>
        <select value={value.id} onChange={evt => setParam({
          ...param,
          personId: evt.target.value
        })}>
          <option value={''}>负责人</option>
          {
            users.map(user => <option value={user.id}>{user.name}</option>)
          }
        </select>
      </div>
    </form>
  )
}

export default SearchPanel