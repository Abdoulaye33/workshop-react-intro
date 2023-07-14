export default function ListTodos({ todos, changeTodoStatus }) {
    let initTodos = [
      {
        id: '0',
        name: 'être reconnaissante',
        done: true
      },
      {
        id: '1',
        name: 'Apprendre React',
        done: false
      },
      {
        id: '2',
        name: 'Rager sur LOL',
        done: true
      }
    ];
  
    const [todosState, setTodosState] = useState(initTodos);
  
    const handleTodoStatusChange = (id) => {
      const newTodos = todosState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        }
        return todo;
      });
      setTodosState(newTodos);
    };
  
    return (
      <section>
        <h2>Todos</h2>
        <ul>
          {todosState.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={todo.id}
                checked={todo.done}
                onChange={() => {
                  handleTodoStatusChange(todo.id);
                }}
              />
              {todo.name}
            </li>
          ))}
        </ul>
        <button>Add a todo</button>
      </section>
    );
  }
  