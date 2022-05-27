import Counter from "container/Counter";
import Todo from "container/Todo";
import "./css/App.css";

function App() {
  return (
    <div className={"app-container"}>
      <Counter />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
