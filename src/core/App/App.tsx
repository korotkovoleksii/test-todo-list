import NewTodoForm from '../../components/NewTodoForm/NewTodoForm';
import TodoList from '../../components/TodoList/Todolist';
import './App.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <NewTodoForm></NewTodoForm>
      <TodoList></TodoList>
      <div id="app-modal" />
    </div>
  );
}

export default App;
