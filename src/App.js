import "./App.css";
import { Provider } from "redux-bundler-react";
import UsersContainer from "./Components/UsersContainer";
import createStore from './bundles';

const store = createStore()

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
