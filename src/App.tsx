import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import routes from './routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;

// TODO: add router
// TODO: add form
