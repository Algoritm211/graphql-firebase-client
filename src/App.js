import './App.css';
import ContactList from './components/ContactList/ContactList'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <Switch>
          <Route path='/' exact component={ContactList} />
          <Route path='/register' exact component={Registration} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
