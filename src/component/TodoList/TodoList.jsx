import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';

export default function TodoList() {
    const [todos, setTodos] = useState ([
        {todo_date:"2024/12/12", todo_text:"Study React", isCompleted: false},
        {todo_date:"2024/10/12", todo_text:"Study HTML", isCompleted: true},
        {todo_date:"2024/01/01", todo_text:"Data Structure", isCompleted: true},    
      ]) 
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    )
}
