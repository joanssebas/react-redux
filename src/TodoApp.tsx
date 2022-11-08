import {useState} from "react";
import {useGetTodoQuery, useGetTodosQuery} from "./store/apis";

export const TodoApp = () => {
  // const {data: todos = [], isLoading} = useGetTodosQuery();
  const [todoId, settodoId] = useState(1);
  const {data: todo, isLoading} = useGetTodoQuery(todoId);
  console.log(todo);

  return (
    <>
      <h1>Todo RTK query</h1>
      <h4>isLoading: {isLoading ? "TRUE" : "FALSE"}</h4>
      <pre>{JSON.stringify(todo)} </pre>
      <button onClick={() => settodoId((prev) => prev + 1)}>next</button>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE " : "PENDING "}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
