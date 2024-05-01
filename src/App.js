import Todo from "./components/todo/Todo";
import "./App.css"
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Todo/>

      </Provider>
    </div>
  );
}

export default App;
