import logo from './logo.svg';
import './App.css';
import Hello from './component/hello';
import MyProfile from './component/MyProfile';
import "bootstrap/dist/css/bootstrap.css" 
import Profile from './component/Profile';
import { BrowserRouter } from 'react-router-dom';
import LayoutInit from './component/LayoutInit';
import BaseRoute from './apps/BaseRoute';


function App() {
  return (
  <BrowserRouter>
    <LayoutInit>
      <BaseRoute />
    </LayoutInit>
  </BrowserRouter>

  );
}

export default App;
