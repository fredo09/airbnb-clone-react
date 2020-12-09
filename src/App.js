import './App.css';

import './Pages/Home';
import { Home } from './Pages/Home';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Comenzando a crear app 🚀 </h1>
      <Home/>
    </div>
  );
}

export default App;
