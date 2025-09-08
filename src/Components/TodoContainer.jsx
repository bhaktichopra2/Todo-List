import Todo from "./todo"
function TodoContainer({todos, delTodo}) {
    return (
        <div className="container">
            {todos.map((todo, index)=>{
                return(
                    <Todo todo={todo} index={index} delTodo={delTodo}/>
                )
            })}
        </div>
    )
}

export default TodoContainer