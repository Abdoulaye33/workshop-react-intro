
export default function AddTodo(addNewTodo) {
    
    const handleSubmit = (e) => {
        const inputRef = useRef()

        e.preventDefault()
        addNewTodo(inputRef.current)
        inputRef.current.value = ''
    }

    return (

        <form action="#" method="POST" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" name="newTodo" placeholder='Create a new todo' />
            <button type='submit'>Create</button>
        </form>

    )
}