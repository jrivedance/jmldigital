import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Front from './Components/Front.js';
import Websites from './Components/Websites.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router> 
    <div className="App">
    
        <Header />
        <Switch>
        <Route path="/" exact component={Front} />
            
        <Route path="/websites" component={Websites} />
        </Switch>
          
        <Footer />
    
    </div>
    </Router>
  );
}

export default App;
