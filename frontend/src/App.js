import Header from '../src/components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {HomeScreen} from './screens/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={HomeScreen} exact/>
      </main>
    </Router>
      
    
  );
}

export default App;
