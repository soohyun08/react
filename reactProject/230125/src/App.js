import Color from "./components/Color";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import TodoProvider from "./contexts/TodoContext";
import ColorProvider from "./contexts/ColorContext";
import CounterProvider from "./contexts/CounterContext";

function App() {
  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>
      {/* 
      <ColorProvider>
        <Color />
      </ColorProvider>

      <TodoProvider>
        <Todo />
      </TodoProvider>
 */}

      <TodoProvider>
        <ColorProvider>
          <Color />
          <Todo />
        </ColorProvider>
      </TodoProvider>
    </>
  );
}

export default App;
