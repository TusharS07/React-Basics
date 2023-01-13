import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Counter from './component/Counter';
import HookCounter from './component/HookCounter';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import NewCounter from './component/NewCounter';

function App() {
  return (

      <Router>
        <Routes>
            <Route path= "/Counter" element= {<Counter />} />
            <Route path= "/HookCounter" element= {<HookCounter />} />
            <Route path= "/Hello" element= {<Hello />} />
            <Route path="/NewCounter" element= {<NewCounter />} />
        </Routes>
      </Router>
  );
}

export default App;
