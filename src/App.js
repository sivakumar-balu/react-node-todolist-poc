import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

const App = () => {
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fetchTodos()
      setTodos(todosFromServer)
    }

    getTodos()
  }, [])

  // Fetch Todos
  const fetchTodos = async () => {
    const res = await fetch('http://localhost:5000/todos')
    const data = await res.json()

    return data
  }

  // Add Todo
  const addTodo = async (todo) => {
    const res = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(todo),
    })

    const data = await res.json()

    setTodos([...todos, data])
  }

  // Delete Todo
  const deleteTodo = async (id) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE',
    })
    
    res.status === 200
      ? setTodos(todos.filter((todo) => todo.id !== id))
      : alert('Error Deleting This Todo')
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTodo(!showAddTodo)}
          showAdd={showAddTodo}
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddTodo && <AddTodo onAdd={addTodo} />}
              {todos.length > 0 ? (
                <Todos
                  todos={todos}
                  onDelete={deleteTodo}
                />
              ) : (
                'No Todos To Show'
              )}
            </>
          )}
        />
        <Footer />
      </div>
    </Router>
  )
}

export default App