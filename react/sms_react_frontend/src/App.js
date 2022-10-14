import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListStudent from './Components/ListStudent';
import HeaderComponent from './Components/HeaderComponent';
import AddOrUpdateStudent from './Components/AddOrUpdateStudent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
      <div className="App">
        <Router>
        <HeaderComponent/>
        <div className="container">
        <Switch>
          <Route path="/" exact><ListStudent/></Route>
          <Route path="/students" ><ListStudent/></Route>
          <Route path="/add-student" ><AddOrUpdateStudent/></Route>
          <Route path="/update-student/:id" ><AddOrUpdateStudent/></Route>
        </Switch>
        </div>
        <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;
