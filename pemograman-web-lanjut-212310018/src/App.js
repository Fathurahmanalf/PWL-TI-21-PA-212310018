import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
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
