import { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import styled from 'styled-components';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const ShortListGroupItem = styled(ListGroupItem)`
  width: 50%;
`

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const API_URL = 'https://jsonplaceholder.typicode.com/todos'

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(API_URL)
      setTodos(response.data)
    }

    fetchTodos()
  }, [])

  const handleToggle = (id: number) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    )
  }


  return (
    <div className="container mt-4">
      <h1 className="text-left">Todo List</h1>
      <ListGroup>
        {todos.map((todo) => (
          <ShortListGroupItem
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            active={todo.completed}
          >
            {todo.title}
          </ShortListGroupItem>
        ))}
      </ListGroup>
    </div>
  )
}

export default Todo