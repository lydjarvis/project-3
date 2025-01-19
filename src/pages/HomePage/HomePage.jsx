import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function HomePage() {
  const [todo, setTodos] = useState ([
    {todo_date:"2024/12/12", todo_text:"Study React", isCompleted: false},
    {todo_date:"2024/10/12", todo_text:"Study HTML", isCompleted: true}, 
    {todo_date:"2024/01/01", todo_text:"Data Structure", isCompleted: true}, 

  ])

  return (
    <>
        <h1>Home Page</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Todo Text</th>
          <th>Todo Date</th>
          <th>IsCompleted</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        {
        todo.map ((todo, index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{todo.todo_text}</td>
          <td>{todo.todo_date}</td>
          <td>{todo.isCompleted ? "YES" : "NO" }</td>
          <td> <Button variant="danger">Delete</Button></td>

        </tr>
        ))
      }
      </tbody>
    </Table>
    </>
  )
}
