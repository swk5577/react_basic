import './App.scss';
import Css from './page/Css';
import Home from './page/Home';
import Img from './page/Img';
import Not from './page/Not';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
import Router from './page/Router';
import StateProps from './page/StateProps';

function App() {
  return (
    <BrowserRouter>
    <div className = "wrap">
      <header>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/css"> css활용</Link>
          <Link to="/img"> img 활용</Link>
          <Link to="/router" state='a100'> router(페이지이동)</Link>
          <Link to="/props"> State&Props</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/css' element={<Css/>} />
          <Route path='/img' element={<Img/>} />
          <Route path='/*' element={<Not/>} />
          <Route path='/router' element={<Router/>} />
          <Route path='/props' element={<StateProps data='1000' name = 'props'/>} />

        </Routes>
      </main>
    </div>
    </BrowserRouter>

  );
}

export default App;
