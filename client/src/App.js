import './App.css';
import Main from './views/Main';
import Update from './views/Update';
import Create from './views/Create';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Favorite authors</h1>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={ (routeProps) => <Main {...routeProps} />}/>
            <Route exact path="/update/:id" render={ (routeProps) => <Update {...routeProps} />}/>
            <Route exact path="/new" render={ (routeProps) => <Create {...routeProps} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
